"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAdsClient = exports.RuntimeType = void 0;
const node_ads_1 = require("node-ads");
var RuntimeType;
(function (RuntimeType) {
    RuntimeType[RuntimeType["TwinCat3"] = 0] = "TwinCat3";
    RuntimeType[RuntimeType["TwinCat2"] = 1] = "TwinCat2";
    RuntimeType[RuntimeType["TwinCat2WithConfigFile"] = 2] = "TwinCat2WithConfigFile";
})(RuntimeType = exports.RuntimeType || (exports.RuntimeType = {}));
class NodeAdsClient {
    constructor(adsClientConnectOptions, adapter) {
        this._reconnectTimer = null;
        this._checkDeviceStateInterval = null;
        this.connected = false;
        this.deviceInfo = null;
        this._tableVersion = null;
        this._oldIobrokerResync = null;
        this._datatyps = null;
        this._symbols = null;
        this._adsClientConnectOptions = adsClientConnectOptions;
        this._adapter = { log: adapter.log, setStateChangedAsync: adapter.setStateChangedAsync };
        this._adsClient = (0, node_ads_1.connect)(adsClientConnectOptions, () => {
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
        this._adsClient.on('notification', (handle) => {
            var _a;
            if (handle.indexGroup === node_ads_1.ADSIGRP.SYM_VERSION) {
                if (this._tableVersion && this._tableVersion !== handle.value) {
                    this._newSync();
                }
                this._tableVersion = handle.value;
                return;
            }
            if ((_a = handle.symname) === null || _a === void 0 ? void 0 : _a.includes('iobrokerresync')) {
                if (this._oldIobrokerResync && this._oldIobrokerResync !== handle.value) {
                    this._newSync();
                }
                this._oldIobrokerResync = handle.value;
            }
        });
    }
    _reconnect() {
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
    _onConnected() {
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
    _onDisconnecting() {
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
    _newSync() {
        // TODO
    }
    _syncVarTable() {
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
    set _setConnectionState(newConnectionState) {
        this.connected = newConnectionState;
        this._adapter.setStateChangedAsync('info.connection', newConnectionState, true);
    }
    registerNotificationHandler(callback) {
        this._adsClient.on('notification', (handle) => {
            var _a;
            if (handle.indexGroup === node_ads_1.ADSIGRP.SYM_VERSION || ((_a = handle.symname) === null || _a === void 0 ? void 0 : _a.includes('iobrokerresync'))) {
                return;
            }
            callback(handle);
        });
    }
}
exports.NodeAdsClient = NodeAdsClient;
//# sourceMappingURL=NodeAdsClient.js.map