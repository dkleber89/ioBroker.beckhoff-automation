import { AdsClient, AdsClientConnectOptions, AdsReadDeviceInfoResult, connect } from 'node-ads';

export class NodeAdsClient {
  private adsClientConnectOptions: AdsClientConnectOptions;

  private adsClient: AdsClient;

  private reconnectTimer: NodeJS.Timeout | null = null;

  private checkDeviceStateInterval: NodeJS.Timeout | null = null;

  public connected = false;

  public deviceInfo: AdsReadDeviceInfoResult | null = null;

  private iobrokerLogger: ioBroker.Logger;

  constructor(adsClientConnectOptions: AdsClientConnectOptions, logger: ioBroker.Logger) {
    this.adsClientConnectOptions = adsClientConnectOptions;
    this.iobrokerLogger = logger;

    this.adsClient = connect(adsClientConnectOptions, () => {
      this.onConnected();
    });

    this.adsClient.on('timeout', error => {
      this.iobrokerLogger.error(error);

      this.onDisconnecting();
    });

    this.adsClient.on('error', error => {
      this.iobrokerLogger.error(error);

      this.onDisconnecting();
    });
  }

  private reconnect(): void {
    if (!this.reconnectTimer && !this.connected) {
      this.reconnectTimer = setTimeout(() => {
        if (!this.connected) {
          this.adsClient.connect(() => {
            if (this.reconnectTimer) {
              clearTimeout(this.reconnectTimer);
              this.reconnectTimer = null;
            }

            this.onConnected();
          });
        }
      }, this.adsClientConnectOptions.timeout || 500);
    }
  }

  private onConnected(): void {
    this.connected = true;

    this.checkDeviceStateInterval = setInterval(() => {
      this.adsClient.readDeviceInfo((error, result) => {
        if (error) {
          this.iobrokerLogger.error(error.message);

          this.connected = false;
          this.onDisconnecting();

          this.adsClient.end(() => {
            this.reconnect();
          });
        }

        if (result) {
          this.deviceInfo = result;
        }
      });
    }, 5000);
  }

  private onDisconnecting(): void {
    if (this.checkDeviceStateInterval) {
      clearInterval(this.checkDeviceStateInterval);

      this.checkDeviceStateInterval = null;
    }

    this.connected = false;

    this.adsClient.end(() => {
      this.reconnect();
    });
  }
}
