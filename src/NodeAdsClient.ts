import { AdsClient, AdsClientConnectOptions, connect } from 'node-ads';

export class NodeAdsClient {
  private adsClientConnectOptions: AdsClientConnectOptions;

  private adsClient: AdsClient;

  private reconnectTimer: NodeJS.Timeout | null = null;

  public connected = false;

  constructor(adsClientConnectOptions: AdsClientConnectOptions, logger: ioBroker.Logger) {
    this.adsClientConnectOptions = adsClientConnectOptions;

    this.adsClient = connect(adsClientConnectOptions, () => {
      this.connected = true;
    });

    this.adsClient.on('timeout', error => {
      logger.error(error);
      this.connected = false;

      this.adsClient.end(() => {
        this.reconnect();
      });
    });

    this.adsClient.on('error', error => {
      logger.error(error);
      this.connected = false;

      this.adsClient.end(() => {
        this.reconnect();
      });
    });
  }

  private reconnect(): void {
    if (!this.reconnectTimer && !this.connected) {
      this.reconnectTimer = setTimeout(() => {
        if (!this.connected) {
          this.adsClient.connect(() => {
            this.reconnectTimer = null;
            this.connected = true;
          });
        }
      }, this.adsClientConnectOptions.timeout || 500);
    }
  }
}
