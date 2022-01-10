import { writeFileSync } from 'fs';

import { AdapterInstance } from '@iobroker/adapter-core';
import { AdsClient, AdsDatatyp, AdsSymbol } from 'node-ads';
import { parseString } from 'xml2js';
import { firstCharLowerCase, parseBooleans, parseNumbers } from 'xml2js/lib/processors';

import { RuntimeType } from '../Beckhoff';

export interface BeckhoffDatatyp {
  name: string;
  type: string;
  comment?: string;
  datatyps?: BeckhoffDatatyp[];
  array?: {
    lBound: number;
    elements: number;
  };
}

export interface BeckhoffSymbol {
  name: string;
  type: string;
  comment?: string;
  arrayid?: number;
}

type Adapter = Pick<AdapterInstance, 'log' | 'config'>;

export class PlcStructure {
  private _datatyps: AdsDatatyp[] | null = null;

  private _symbols: AdsSymbol[] | null = null;

  private _adapter: Adapter;

  private _adsClient: AdsClient;

  private _onUpdatedCallbacks: ((datatyps: AdsDatatyp[] | null, symbols: AdsSymbol[] | null) => void)[] = [];

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

  private _tpyData(): void {
    if (!this._adapter.config.tpyFile) {
      this._adapter.log.error(
        'No *.tpy File was Uploaded. Please upload a *.tpy File or use an other Mode in Config Window.'
      );

      this._writeNewData(null, null);
      return;
    }

    let wait = true;

    parseString(
      this._adapter.config.tpyFile.data,
      {
        normalize: true,
        ignoreAttrs: true,
        explicitArray: false,
        tagNameProcessors: [firstCharLowerCase],
        valueProcessors: [parseNumbers, parseBooleans],
      },
      (err, result) => {
        if (err) {
          this._adapter.log.error(
            'No proper *.tpy File was Uploaded. Please upload a proper *.tpy File or use an other Mode in Config Window.'
          );
          this._adapter.log.error(err.message);

          wait = false;
          return;
        }

        writeFileSync('./datatyps.ts', JSON.stringify(result.plcProjectInfo.dataTypes.dataType, undefined, 2));
        writeFileSync('./symbols.ts', JSON.stringify(result.plcProjectInfo.symbols.symbol, undefined, 2));

        if (!result?.plcProjectInfo?.dataTypes?.dataType) {
          this._adapter.log.error(`No Datatyps found in ${this._adapter.config.tpyFile?.name} File`);

          this._datatyps = null;

          wait = false;
          return;
        }

        if (!result?.plcProjectInfo?.symbols?.symbol) {
          this._adapter.log.error(`No Symbols found in ${this._adapter.config.tpyFile?.name} File`);

          this._symbols = null;

          wait = false;
          return;
        }

        this._datatyps =
          result.plcProjectInfo.dataTypes.dataType?.length >= 1 ? result.plcProjectInfo.dataTypes.dataType : null;

        this._symbols = result.plcProjectInfo.symbols.symbol?.length >= 1 ? result.plcProjectInfo.symbols.symbol : null;

        wait = false;
      }
    );

    while (wait) {
      // Do nothing and wait
    }
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

            resolve(datatyps && datatyps.length >= 1 ? datatyps : null);
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

            resolve(symbols && symbols.length >= 1 ? symbols : null);
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
      this._callOnUpdated();
    }
  }

  private _callOnUpdated(): void {
    this._onUpdatedCallbacks.forEach(callback => {
      callback(this._datatyps, this._symbols);
    });
  }

  public onUpdated(callback: (datatyps: AdsDatatyp[] | null, symbols: AdsSymbol[] | null) => void): void {
    this._onUpdatedCallbacks.push(callback);
  }

  public update(): void {
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
