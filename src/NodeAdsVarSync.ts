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
import { ConnectionType } from './NodeAdsClient';

interface NodeAdsVarTableOptions {
  connectionType: ConnectionType;
}

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

export class NodeAdsVarTable {
  private _targetVarTable: string;

  private _options: NodeAdsVarTableOptions;

  private _relevantSymbols: AdsSymbol[] = [];

  private _handles: AdsClientHandle[] = [];

  private _iobrokerLogger: ioBroker.Logger;

  constructor(
    targetVarTable: string,
    options: NodeAdsVarTableOptions,
    iobrokerLogger: ioBroker.Logger,
    datatyps?: AdsDatatyp[],
    symbols?: AdsSymbol[]
  ) {
    this._targetVarTable = targetVarTable.toLowerCase();
    this._options = options;
    this._iobrokerLogger = iobrokerLogger;

    if (datatyps && symbols) {
      this.updateHandles(datatyps, symbols);
    }
  }

  public updateHandles(datatyps: AdsDatatyp[], symbols: AdsSymbol[]): void {
    const targetIndex = this._options.connectionType === ConnectionType.TwinCat3 ? 0 : 1;

    symbols.forEach(symbol => {
      if (symbol.name.toLowerCase().indexOf(this._targetVarTable) === targetIndex) {
        this._relevantSymbols.push(symbol);
      }
    });

    this._createHandles(datatyps);
  }

  private _createHandles(datatyps: AdsDatatyp[]) {
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
        }
      }
    });
  }

  get handles(): AdsClientHandle[] {
    return this._handles;
  }
}
