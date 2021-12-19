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

  private _arrayName: string | null = null;

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

    this._handles = [];

    this._relevantSymbols.forEach(symbol => {
      this._createHandles(datatyps, symbol);
    });
  }

  private _createHandles(datatyps: AdsDatatyp[], symbol: AdsSymbol, datatype?: AdsDatatyp, prefix?: string) {
    const tempHandle: AdsClientHandle = {};

    // First Level in Tree
    if (!datatype || !prefix) {
      if (!symbol.arrayid) {
        if (supportedDatatyps[symbol.type as keyof SupportedDatatyps]) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = supportedDatatyps[symbol.type as keyof SupportedDatatyps];

          this._handles.push(tempHandle);
        } else if (symbol.type.startsWith('STRING(')) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = string(
            parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10)
          );

          this._handles.push(tempHandle);
        } else {
          const datatyp = datatyps.find(datatyp => datatyp.name === symbol.type);

          if (!datatyp) {
            this._iobrokerLogger.warn(
              `Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`
            );

            return;
          }

          this._createHandles(datatyps, symbol, datatyp, `${symbol.name}.`);
        }

        return;
      }

      if (!this._arrayName || !symbol.name.includes(this._arrayName)) {
        this._arrayName = symbol.name.substring(0, symbol.name.indexOf('['));

        this._iobrokerLogger.warn(
          `Unsupported Array (${this._arrayName}) found in Variable Table (${this._targetVariableTable})`
        );
      }

      return;
    }

    // TODO: Work on deeper Levels
    // Second Level or deeper in Tree
    const { datatyps: datatypeDatatyps, name } = datatype;

    if (!datatypeDatatyps) {
      this._iobrokerLogger.error(`Datatyps in Datatype (${name}) not found`);

      return;
    }

    datatypeDatatyps.forEach(datatypeDatatype => {
      if (!datatypeDatatype) {
        if (supportedDatatyps[symbol.type as keyof SupportedDatatyps]) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = supportedDatatyps[symbol.type as keyof SupportedDatatyps];

          this._handles.push(tempHandle);
        } else if (symbol.type.startsWith('STRING(')) {
          tempHandle.symname = symbol.name;
          tempHandle.bytelength = string(
            parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10)
          );

          this._handles.push(tempHandle);
        } else {
          const datatyp = datatyps.find(datatyp => datatyp.name === symbol.type);

          if (!datatyp) {
            this._iobrokerLogger.warn(
              `Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`
            );

            return;
          }

          this._createHandles(datatyps, symbol, datatyp, `${symbol.name}.`);
        }

        return;
      }

      if (!this._arrayName || !symbol.name.includes(this._arrayName)) {
        this._arrayName = symbol.name.substring(0, symbol.name.indexOf('['));

        this._iobrokerLogger.warn(
          `Unsupported Array (${this._arrayName}) found in Variable Table (${this._targetVariableTable})`
        );
      }
    });
  }

  get handles(): AdsClientHandle[] {
    return this._handles;
  }
}
