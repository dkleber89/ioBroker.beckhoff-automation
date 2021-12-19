import { AdapterInstance } from '@iobroker/adapter-core';
import { AdsClient, AdsDatatyp, AdsSymbol } from 'node-ads';
import { parseStringPromise } from 'xml2js';

import { RuntimeType } from '../Beckhoff';

type Adapter = Pick<AdapterInstance, 'log' | 'config'>;

export class PlcStructure {
  private _datatyps: AdsDatatyp[] | null = null;

  private _symbols: AdsSymbol[] | null = null;

  private _adapter: Adapter;

  private _adsClient: AdsClient;

  private _onPlcStructureUpdatedCallbacks: ((datatyps: AdsDatatyp[] | null, symbols: AdsSymbol[] | null) => void)[] =
    [];

  private _onError: () => void;

  constructor(adapter: AdapterInstance, adsClient: AdsClient, connected: boolean, onError: () => void) {
    this._adapter = { log: adapter.log, config: adapter.config };
    this._adsClient = adsClient;
    this._onError = onError;

    if (this._adapter.config.beckhoffRuntimeType === RuntimeType.TwinCat2WithConfigFile) {
      this._tpyData();
    } else if (connected) {
      this._plcData();
    }
  }

  private async _tpyData(): Promise<void> {
    if (!this._adapter.config.tpyFile) {
      this._adapter.log.error(
        'No *.tpy File was Uploaded. Please upload a *.tpy File or use an other Mode in Config Window.'
      );

      this._writeNewData(null, null);
      return;
    }

    try {
      const result = await parseStringPromise(this._adapter.config.tpyFile.data, { normalize: true });

      if (!result.PlcProjectInfo.DataTypes[0].DataType) {
        this._adapter.log.error(`No Datatyps found in ${this._adapter.config.tpyFile.name} File`);
      }

      if (!result.PlcProjectInfo.Symbols[0].Symbol) {
        this._adapter.log.error(`No Symbols found in ${this._adapter.config.tpyFile.name} File`);
      }

      this._writeNewData(result.PlcProjectInfo.DataTypes[0].DataTyp, result.PlcProjectInfo.Symbols[0].Symbol);
      return;
    } catch (e) {
      const error = e as Error;

      this._adapter.log.error(
        'No proper *.tpy File was Uploaded. Please upload a proper *.tpy File or use an other Mode in Config Window.'
      );
      this._adapter.log.error(error.message);
    }

    this._writeNewData(null, null);
  }

  private async _plcData(): Promise<void> {
    try {
      const allPromiseResults = await Promise.all([
        new Promise<AdsDatatyp[] | null>((resolve, reject) => {
          this._adsClient.getDatatyps((error, datatyps) => {
            if (error) {
              this._adapter.log.error('Can´t receive Datatyps from PLC');
              this._adapter.log.error(error.message);

              reject();
              return;
            }

            resolve(datatyps ?? null);
          });
        }),
        new Promise<AdsSymbol[] | null>((resolve, reject) => {
          this._adsClient.getSymbols((error, symbols) => {
            if (error) {
              this._adapter.log.error('Can´t receive Symbols from PLC');
              this._adapter.log.error(error.message);

              reject();
              return;
            }

            resolve(symbols ?? null);
          });
        }),
      ]);

      if (!allPromiseResults[0]) {
        this._adapter.log.error('No Symbols found on PLC');
      }

      if (!allPromiseResults[1]) {
        this._adapter.log.error('No Datatyps found on PLC');
      }

      this._writeNewData(allPromiseResults[0], allPromiseResults[1]);
      return;
    } catch {
      this._onError();
    }

    this._writeNewData(null, null);
  }

  private _writeNewData(datatyps: AdsDatatyp[] | null, symbols: AdsSymbol[] | null) {
    let newData = false;

    // Only a very incomolete check but enough here
    if (this._datatyps !== datatyps) {
      newData = true;

      this._datatyps = datatyps;
    }

    if (this._symbols !== symbols) {
      newData = true;

      this._symbols = symbols;
    }

    if (newData) {
      this._callOnPlcStructureUpdated();
    }
  }

  private _callOnPlcStructureUpdated(): void {
    this._onPlcStructureUpdatedCallbacks.forEach(callback => {
      callback(this._datatyps, this._symbols);
    });
  }

  public onPlcStructureUpdated(callback: (datatyps: AdsDatatyp[] | null, symbols: AdsSymbol[] | null) => void): void {
    this._onPlcStructureUpdatedCallbacks.push(callback);
  }

  public updatePlcStructure(): void {
    if (this._adapter.config.beckhoffRuntimeType !== RuntimeType.TwinCat2WithConfigFile) {
      this._plcData();
    }
  }

  public get datatyps(): AdsDatatyp[] | null {
    return this._datatyps;
  }

  public get symbols(): AdsSymbol[] | null {
    return this._symbols;
  }
}
