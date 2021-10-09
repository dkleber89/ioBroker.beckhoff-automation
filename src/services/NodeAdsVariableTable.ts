import {
  AdsClientHandle,
  AdsDatatyp,
  AdsSymbol,
  AdsSymbolType,
  BOOL,
  BYTE,
  DATE,
  DATE_AND_TIME,
  DINT,
  DT,
  DWORD,
  INT,
  LINT,
  LREAL,
  REAL,
  SINT,
  string,
  STRING,
  TIME,
  TIME_OF_DAY,
  TOD,
  UDINT,
  UINT,
  ULINT,
  USINT,
  WORD,
} from 'node-ads';

import { RuntimeType } from '../NodeAdsClient';

interface SupportedDatatyps {
  BOOL: AdsSymbolType;
  BYTE: AdsSymbolType;
  WORD: AdsSymbolType;
  DWORD: AdsSymbolType;
  SINT: AdsSymbolType;
  USINT: AdsSymbolType;
  INT: AdsSymbolType;
  UINT: AdsSymbolType;
  DINT: AdsSymbolType;
  UDINT: AdsSymbolType;
  LINT: AdsSymbolType;
  ULINT: AdsSymbolType;
  REAL: AdsSymbolType;
  LREAL: AdsSymbolType;
  TIME: AdsSymbolType;
  TIME_OF_DAY: AdsSymbolType;
  TOD: AdsSymbolType;
  DATE: AdsSymbolType;
  DATE_AND_TIME: AdsSymbolType;
  DT: AdsSymbolType;
  'STRING(80)': AdsSymbolType;
}

const supportedDatatyps: SupportedDatatyps = {
  BOOL,
  BYTE,
  WORD,
  DWORD,
  SINT,
  USINT,
  INT,
  UINT,
  DINT,
  UDINT,
  LINT,
  ULINT,
  REAL,
  LREAL,
  TIME,
  TIME_OF_DAY,
  TOD,
  DATE,
  DATE_AND_TIME,
  DT,
  'STRING(80)': STRING,
};

export class NodeAdsVariableTable {
  private _targetVariableTable: string;

  private _relevantSymbols: AdsSymbol[] = [];

  private _handles: AdsClientHandle[] = [];

  private _iobrokerLogger: ioBroker.Logger;

  private _runtimeType: RuntimeType;

  constructor(
    targetVariableTable: string,
    runtimeType: RuntimeType,
    iobrokerLogger: ioBroker.Logger,
    datatyps?: AdsDatatyp[],
    symbols?: AdsSymbol[]
  ) {
    this._targetVariableTable = targetVariableTable.toLowerCase();
    this._iobrokerLogger = iobrokerLogger;
    this._runtimeType = runtimeType;

    if (datatyps && symbols) {
      this.updateHandles(datatyps, symbols);
    }
  }

  public updateHandles(datatyps: AdsDatatyp[], symbols: AdsSymbol[]): void {
    const targetIndex = this._runtimeType === RuntimeType.TwinCat3 ? 0 : 1;

    this._relevantSymbols = [];

    symbols.forEach(symbol => {
      if (symbol.name.toLowerCase().indexOf(this._targetVariableTable) === targetIndex) {
        this._relevantSymbols.push(symbol);
      }
    });

    this._createHandles(datatyps);
  }

  private _createHandles(datatyps: AdsDatatyp[]) {
    this._handles = [];

    this._relevantSymbols.forEach(symbol => {
      const tempHandle: AdsClientHandle = {};

      if (!symbol.arrayid) {
        if (supportedDatatyps[symbol.type as keyof SupportedDatatyps]) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = supportedDatatyps[symbol.type as keyof SupportedDatatyps];
        } else if (symbol.type.startsWith('STRING(')) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = string(
            parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10)
          );
        } else {
          this._iobrokerLogger.warn(
            `Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`
          );
        }

        this._handles.push(tempHandle);

        return;
      }

      this._iobrokerLogger.warn(
        `Unsupported Array (${symbol.name}) found in Variable Table (${this._targetVariableTable})`
      );
    });
  }

  get handles(): AdsClientHandle[] {
    return this._handles;
  }
}
