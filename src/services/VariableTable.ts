import { AdapterInstance } from '@iobroker/adapter-core';
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

import { RuntimeType } from '../Beckhoff';

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

type Adapter = Pick<AdapterInstance, 'log' | 'config'>;

export class VariableTable {
  private _targetVariableTable: string;

  private _adapter: Adapter;

  private _arrayName: string | null = null;

  private _handles: AdsClientHandle[] = [];

  constructor(
    adapterInstance: AdapterInstance,
    targetVariableTable: string,
    datatyps?: AdsDatatyp[] | null,
    symbols?: AdsSymbol[] | null
  ) {
    this._adapter = { log: adapterInstance.log, config: adapterInstance.config };
    this._targetVariableTable = targetVariableTable;

    if (datatyps && symbols) {
      this.update(datatyps, symbols);
    }
  }

  public update(datatyps: AdsDatatyp[], symbols: AdsSymbol[]): void {
    const targetIndex = this._adapter.config.beckhoffRuntimeType === RuntimeType.TwinCat3 ? 0 : 1;

    const relevantSymbols: AdsSymbol[] = [];

    symbols.forEach(symbol => {
      if (symbol.name.toLowerCase().indexOf(this._targetVariableTable) === targetIndex) {
        relevantSymbols.push(symbol);
      }
    });

    // Remove old Handles before createNew ones
    this._handles = [];

    relevantSymbols.forEach(symbol => {
      this._createHandles(datatyps, symbol);
    });
  }

  private _createHandles(datatyps: AdsDatatyp[], symbol?: AdsSymbol, datatyp?: AdsDatatyp, prefix?: string) {
    // ##### Level 0 in tree #####
    if (symbol) {
      // Arrays not supported at this time
      if (symbol.arrayid) {
        if (!this._arrayName || !symbol.name.includes(this._arrayName)) {
          this._arrayName = symbol.name.substring(0, symbol.name.indexOf('['));

          this._adapter.log.warn(
            `Unsupported Array (${this._arrayName}) found in Variable Table (${this._targetVariableTable})`
          );
        }

        return;
      }

      // Supported base datatype ... Add
      if (supportedDatatyps[symbol.type as keyof SupportedDatatyps]) {
        this._handles.push({
          symname: symbol.name,
          bytelength: supportedDatatyps[symbol.type as keyof SupportedDatatyps],
        });

        // Supported string datatype with custom length ... Add
      } else if (symbol.type.startsWith('STRING(')) {
        this._handles.push({
          symname: symbol.name,
          bytelength: string(parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10)),
        });
        // Defined userdatatype ... Dive one level deeper
      } else {
        const foundDatatyp = datatyps.find(datatyp => datatyp.name === symbol.type);

        if (!foundDatatyp) {
          this._adapter.log.warn(
            `Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`
          );

          return;
        }

        this._createHandles(datatyps, undefined, foundDatatyp, `${symbol.name}.`);
      }

      return;
    }

    // ##### Level 1 or deeper in tree #####
    if (datatyp && prefix) {
      if (!datatyp.datatyps) {
        this._adapter.log.error(
          `Datatyps in Datatyp (${datatyp.name}) for Variable Table (${this._targetVariableTable}) not found`
        );

        return;
      }

      datatyp.datatyps.forEach(datatypOfDatatyp => {
        // Arrays not supported at this time
        if (datatypOfDatatyp.array) {
          this._adapter.log.warn(
            `Unsupported Array (${datatypOfDatatyp.name}) found in Datatyp (${datatyp.name}) of Variable Table (${this._targetVariableTable})`
          );

          return;
        }

        // Supported base datatype ... Add
        if (supportedDatatyps[datatypOfDatatyp.type as keyof SupportedDatatyps]) {
          this._handles.push({
            symname: `${prefix}${datatypOfDatatyp.name}`,
            bytelength: supportedDatatyps[datatypOfDatatyp.type as keyof SupportedDatatyps],
          });

          // Supported string datatype with custom length ... Add
        } else if (datatypOfDatatyp.type.startsWith('STRING(')) {
          this._handles.push({
            symname: `${prefix}${datatypOfDatatyp.name}`,
            bytelength: string(
              parseInt(
                datatypOfDatatyp.type.slice(datatypOfDatatyp.type.indexOf('(') + 1, datatypOfDatatyp.type.indexOf(')')),
                10
              )
            ),
          });

          // Defined userdatatype ... Dive one level deeper
        } else {
          const foundDatatyp = datatyps.find(datatyp => datatyp.name === datatypOfDatatyp.type);

          if (!foundDatatyp) {
            this._adapter.log.warn(
              `Unsupported Variable (${datatypOfDatatyp.name}) found in Datatyp (${datatyp.name}) of Variable Table (${this._targetVariableTable})`
            );

            return;
          }

          this._createHandles(datatyps, undefined, foundDatatyp, `${prefix}${datatypOfDatatyp.name}.`);
        }
      });

      return;
    }

    this._adapter.log.error(
      `Unexpected Error in createHandles for Variable Table (${this._targetVariableTable}) occurred. No symbol provided when on Level 0 in Tree`
    );
  }
}
