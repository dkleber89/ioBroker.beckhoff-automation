import { AdapterInstance } from '@iobroker/adapter-core';
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

type Adapter = Pick<AdapterInstance, 'log' | 'setStateChangedAsync'>;

export class NodeAdsClient {
  private _adsClientConnectOptions: AdsClientConnectOptions;

  private _adsClient: AdsClient;

  private _reconnectTimer: NodeJS.Timeout | null = null;

  private _checkDeviceStateInterval: NodeJS.Timeout | null = null;

  private _adapter: Adapter;

  public connected = false;

  public deviceInfo: AdsReadDeviceInfoResult | null = null;

  private _tableVersion: boolean | null = null;

  private _oldIobrokerResync: boolean | null = null;

  private _datatyps: AdsDatatyp[] | null = null;

  private _symbols: AdsSymbol[] | null = null;

  constructor(adsClientConnectOptions: AdsClientConnectOptions, adapter: AdapterInstance) {
    this._adsClientConnectOptions = adsClientConnectOptions;
    this._adapter = { log: adapter.log, setStateChangedAsync: adapter.setStateChangedAsync };

    this._adsClient = connect(adsClientConnectOptions, () => {
      this._onConnected();
    });

    this._adsClient.on('timeout', error => {
      this._adapter.log.error(error);

      this._onDisconnecting();
    });

    this._adsClient.on('error', error => {
      this._adapter.log.error(error);

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
    this._setConnectionState = true;

    this._checkDeviceStateInterval = setInterval(() => {
      this._adsClient.readDeviceInfo((error, result) => {
        if (error) {
          this._adapter.log.error(error.message);

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

    this._setConnectionState = false;
    this.deviceInfo = null;

    this._adsClient.end(() => {
      this._reconnect();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private _newSync(): void {
    // TODO
  }

  private _syncVarTable(): void {
    this._adsClient.getDatatyps((error, datatyps) => {
      if (error) {
        this._adapter.log.error(error.message);

        return;
      }

      if (!datatyps) {
        this._adapter.log.error('No Datatyps found on PLC');

        return;
      }

      this._datatyps = datatyps;
    });

    this._adsClient.getSymbols((error, symbols) => {
      if (error) {
        this._adapter.log.error(error.message);

        return;
      }

      if (!symbols) {
        this._adapter.log.error('No Symbols found on PLC');

        return;
      }

      this._symbols = symbols;
    });
  }

  private set _setConnectionState(newConnectionState: boolean) {
    this.connected = newConnectionState;

    this._adapter.setStateChangedAsync('info.connection', newConnectionState, true);
  }

  public registerNotificationHandler(callback: (handle: AdsClientHandleAnswer) => void): void {
    this._adsClient.on('notification', (handle: AdsClientHandleAnswer) => {
      if (handle.indexGroup === ADSIGRP.SYM_VERSION || handle.symname?.includes('iobrokerresync')) {
        return;
      }

      callback(handle);
    });
  }
}
