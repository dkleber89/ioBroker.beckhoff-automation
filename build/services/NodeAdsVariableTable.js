"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAdsVariableTable = void 0;
const node_ads_1 = require("node-ads");
const NodeAdsClient_1 = require("../NodeAdsClient");
const supportedDatatyps = {
    BOOL: node_ads_1.BOOL,
    BYTE: node_ads_1.BYTE,
    WORD: node_ads_1.WORD,
    DWORD: node_ads_1.DWORD,
    SINT: node_ads_1.SINT,
    USINT: node_ads_1.USINT,
    INT: node_ads_1.INT,
    UINT: node_ads_1.UINT,
    DINT: node_ads_1.DINT,
    UDINT: node_ads_1.UDINT,
    LINT: node_ads_1.LINT,
    ULINT: node_ads_1.ULINT,
    REAL: node_ads_1.REAL,
    LREAL: node_ads_1.LREAL,
    TIME: node_ads_1.TIME,
    TIME_OF_DAY: node_ads_1.TIME_OF_DAY,
    TOD: node_ads_1.TOD,
    DATE: node_ads_1.DATE,
    DATE_AND_TIME: node_ads_1.DATE_AND_TIME,
    DT: node_ads_1.DT,
    'STRING(80)': node_ads_1.STRING,
};
class NodeAdsVariableTable {
    constructor(targetVariableTable, runtimeType, iobrokerLogger, datatyps, symbols) {
        this._relevantSymbols = [];
        this._handles = [];
        this._arrayName = null;
        this._targetVariableTable = targetVariableTable.toLowerCase();
        this._iobrokerLogger = iobrokerLogger;
        this._runtimeType = runtimeType;
        if (datatyps && symbols) {
            this.updateHandles(datatyps, symbols);
        }
    }
    updateHandles(datatyps, symbols) {
        const targetIndex = this._runtimeType === NodeAdsClient_1.RuntimeType.TwinCat3 ? 0 : 1;
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
    _createHandles(datatyps, symbol, datatype, prefix) {
        const tempHandle = {};
        // First Level in Tree
        if (!datatype || !prefix) {
            if (!symbol.arrayid) {
                if (supportedDatatyps[symbol.type]) {
                    tempHandle.symname = symbol.name;
                    tempHandle.bytelength = supportedDatatyps[symbol.type];
                    this._handles.push(tempHandle);
                }
                else if (symbol.type.startsWith('STRING(')) {
                    tempHandle.symname = symbol.name;
                    tempHandle.bytelength = (0, node_ads_1.string)(parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10));
                    this._handles.push(tempHandle);
                }
                else {
                    const datatyp = datatyps.find(datatyp => datatyp.name === symbol.type);
                    if (!datatyp) {
                        this._iobrokerLogger.warn(`Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`);
                        return;
                    }
                    this._createHandles(datatyps, symbol, datatyp, `${symbol.name}.`);
                }
                return;
            }
            if (!this._arrayName || !symbol.name.includes(this._arrayName)) {
                this._arrayName = symbol.name.substring(0, symbol.name.indexOf('['));
                this._iobrokerLogger.warn(`Unsupported Array (${this._arrayName}) found in Variable Table (${this._targetVariableTable})`);
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
                if (supportedDatatyps[symbol.type]) {
                    tempHandle.symname = symbol.name;
                    tempHandle.bytelength = supportedDatatyps[symbol.type];
                    this._handles.push(tempHandle);
                }
                else if (symbol.type.startsWith('STRING(')) {
                    tempHandle.symname = symbol.name;
                    tempHandle.bytelength = (0, node_ads_1.string)(parseInt(symbol.type.slice(symbol.type.indexOf('(') + 1, symbol.type.indexOf(')')), 10));
                    this._handles.push(tempHandle);
                }
                else {
                    const datatyp = datatyps.find(datatyp => datatyp.name === symbol.type);
                    if (!datatyp) {
                        this._iobrokerLogger.warn(`Unsupported Variable (${symbol.name}) found in Variable Table (${this._targetVariableTable})`);
                        return;
                    }
                    this._createHandles(datatyps, symbol, datatyp, `${symbol.name}.`);
                }
                return;
            }
            if (!this._arrayName || !symbol.name.includes(this._arrayName)) {
                this._arrayName = symbol.name.substring(0, symbol.name.indexOf('['));
                this._iobrokerLogger.warn(`Unsupported Array (${this._arrayName}) found in Variable Table (${this._targetVariableTable})`);
            }
        });
    }
    get handles() {
        return this._handles;
    }
}
exports.NodeAdsVariableTable = NodeAdsVariableTable;
//# sourceMappingURL=NodeAdsVariableTable.js.map