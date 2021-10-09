import {
  AdsClient,
  AdsClientConnectOptions,
  AdsClientHandleAnswer,
  AdsDatatyp,
  ADSIGRP,
  AdsReadDeviceInfoResult,
  AdsSymbol,
  connect,
} from 'node-ads';

export enum RuntimeType {
  TwinCat3,
  TwinCat2,
  TwinCat2WithConfigFile,
}

export class NodeAdsClient {
  private _adsClientConnectOptions: AdsClientConnectOptions;

  private _adsClient: AdsClient;

  private _reconnectTimer: NodeJS.Timeout | null = null;

  private _checkDeviceStateInterval: NodeJS.Timeout | null = null;

  private _iobrokerLogger: ioBroker.Logger;

  public connected = false;

  public deviceInfo: AdsReadDeviceInfoResult | null = null;

  private _tableVersion: boolean | null = null;

  private _oldIobrokerResync: boolean | null = null;

  private _datatyps: AdsDatatyp[] | null = null;

  private _symbols: AdsSymbol[] | null = null;

  constructor(adsClientConnectOptions: AdsClientConnectOptions, logger: ioBroker.Logger) {
    this._adsClientConnectOptions = adsClientConnectOptions;
    this._iobrokerLogger = logger;

    this._adsClient = connect(adsClientConnectOptions, () => {
      this._onConnected();
    });

    this._adsClient.on('timeout', error => {
      this._iobrokerLogger.error(error);

      this._onDisconnecting();
    });

    this._adsClient.on('error', error => {
      this._iobrokerLogger.error(error);

      this._onDisconnecting();
    });

    this._adsClient.on('notification', (handle: AdsClientHandleAnswer) => {
      if (handle.indexGroup === ADSIGRP.SYM_VERSION) {
        if (this._tableVersion && this._tableVersion !== handle.value) {
          this._newSync();
        }

        this._tableVersion = handle.value;

        return;
      }

      if (handle.symname?.includes('iobrokerresync')) {
        if (this._oldIobrokerResync && this._oldIobrokerResync !== handle.value) {
          this._newSync();
        }

        this._oldIobrokerResync = handle.value;
      }
    });
  }

  private _reconnect(): void {
    if (!this._reconnectTimer && !this.connected) {
      this._reconnectTimer = setTimeout(() => {
        if (!this.connected) {
          this._adsClient.connect(() => {
            if (this._reconnectTimer) {
              clearTimeout(this._reconnectTimer);
              this._reconnectTimer = null;
            }

            this._onConnected();
          });
        }
      }, this._adsClientConnectOptions.timeout || 500);
    }
  }

  private _onConnected(): void {
    this.connected = true;

    this._checkDeviceStateInterval = setInterval(() => {
      this._adsClient.readDeviceInfo((error, result) => {
        if (error) {
          this._iobrokerLogger.error(error.message);

          this._onDisconnecting();
        }

        if (result) {
          this.deviceInfo = result;
        }
      });
    }, 5000);
  }

  private _onDisconnecting(): void {
    if (this._checkDeviceStateInterval) {
      clearInterval(this._checkDeviceStateInterval);

      this._checkDeviceStateInterval = null;
    }

    this.connected = false;
    this.deviceInfo = null;

    this._adsClient.end(() => {
      this._reconnect();
    });
  }

  private _newSync(): void {
    // TODO
  }

  public registerNotificationHandler(callback: (handle: AdsClientHandleAnswer) => void): void {
    this._adsClient.on('notification', (handle: AdsClientHandleAnswer) => {
      if (handle.indexGroup === ADSIGRP.SYM_VERSION || handle.symname?.includes('iobrokerresync')) {
        return;
      }

      callback(handle);
    });
  }

  private _syncVarTable(): void {
    this._adsClient.getDatatyps((error, datatyps) => {
      if (error) {
        this._iobrokerLogger.error(error.message);

        return;
      }

      if (!datatyps) {
        this._iobrokerLogger.error('No Datatyps found on PLC');

        return;
      }

      this._datatyps = datatyps;
    });

    this._adsClient.getSymbols((error, symbols) => {
      if (error) {
        this._iobrokerLogger.error(error.message);

        return;
      }

      if (!symbols) {
        this._iobrokerLogger.error('No Symbols found on PLC');

        return;
      }

      this._symbols = symbols;
    });
  }
}
