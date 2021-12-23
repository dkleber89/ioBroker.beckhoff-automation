import { AdapterInstance } from '@iobroker/adapter-core';
import { AdsClient, AdsReadDeviceInfoResult, connect } from 'node-ads';

import { PlcStructure } from './services/PlcStructure';
import { VariableTable } from './services/VariableTable';

export enum RuntimeType {
  TwinCat3,
  TwinCat2,
  TwinCat2WithConfigFile,
}

type Adapter = Pick<AdapterInstance, 'log' | 'config' | 'setStateChangedAsync'>;

export class Beckhoff {
  public deviceInfo: AdsReadDeviceInfoResult | null = null;

  public connected = false;

  private _adapter: Adapter;

  private _adsClient: AdsClient;

  private _plcStructure: PlcStructure;

  private _variableTables: VariableTable[];

  private _checkDeviceStateInterval: NodeJS.Timeout | null = null;

  private _reconnectTimer: NodeJS.Timeout | null = null;

  constructor(adapterInstance: AdapterInstance) {
    this._adapter = {
      log: adapterInstance.log,
      config: adapterInstance.config,
      setStateChangedAsync: adapterInstance.setStateChangedAsync,
    };

    this._adsClient = connect(
      {
        host: adapterInstance.config.targetIPAddress,
        amsNetIdTarget: adapterInstance.config.targetAMSNetID,
        amsNetIdSource: adapterInstance.config.adapterAMSNetID,
        port: adapterInstance.config.targetTCPPort,
        amsPortSource: adapterInstance.config.adapterAMSPort,
        amsPortTarget: adapterInstance.config.targetAMSPort,
        timeout: adapterInstance.config.timeout,
        localPort: adapterInstance.config.adapterTCPPort,
        family: 4,
        verbose: this._adapter.log.level === 'debug' ? 1 : this._adapter.log.level === 'silly' ? 2 : 0,
      },
      () => {
        this._onConnected();
      }
    );

    this._adsClient.on('timeout', error => {
      this._adapter.log.error('Timeout occured in AdsClient:');
      this._adapter.log.error(error);

      this._onDisconnecting();
    });

    this._adsClient.on('error', error => {
      this._adapter.log.error('Error ocurred in AdsClient: ');
      this._adapter.log.error(error);

      this._onDisconnecting();
    });

    this._plcStructure = new PlcStructure(adapterInstance, this._adsClient, this.connected, this._onDisconnecting);

    this._variableTables = this._adapter.config.targetVariableTables.map(
      targetVariableTable =>
        new VariableTable(adapterInstance, targetVariableTable, this._plcStructure.datatyps, this._plcStructure.symbols)
    );

    this._plcStructure.onUpdated((datatyps, symbols) =>
      this._variableTables.forEach(variableTable => variableTable.update(datatyps, symbols))
    );
  }

  private async _onConnected(): Promise<void> {
    this._setConnectionState = true;

    this._plcStructure.update();

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
      }, this._adapter.config.reconnectInterval * 1000);
    }
  }

  private set _setConnectionState(newConnectionState: boolean) {
    this.connected = newConnectionState;

    this._adapter.setStateChangedAsync('info.connection', newConnectionState, true);
  }

  public async killAll(): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject();
      }, this._adapter.config.timeout);

      if (this._checkDeviceStateInterval) {
        clearInterval(this._checkDeviceStateInterval);
        this._checkDeviceStateInterval = null;
      }

      if (this._reconnectTimer) {
        clearTimeout(this._reconnectTimer);
        this._reconnectTimer = null;
      }

      if (this._adsClient) {
        this._adsClient.end(() => {
          clearTimeout(timeout);

          resolve();
        });
      }
    });
  }
}
