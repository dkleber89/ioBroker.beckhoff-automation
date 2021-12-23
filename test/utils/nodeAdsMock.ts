import {
  Ads,
  AdsClient,
  AdsClientHandle,
  AdsClientHandleAnswer,
  AdsDatatyp,
  AdsOptions,
  AdsReadDeviceInfoResult,
  AdsReadStateResult,
  AdsSymbol,
} from 'node-ads';

import tc3datatyps from './mockData/tc3datatyps.json';
import tc3symbols from './mockData/tc3symbols.json';
import deviceInfo from './mockData/deviceInfo.json';
import { RuntimeType } from '../../src/Beckhoff';
import EventEmitter from 'events';

type AdsClientMock = AdsClient & { setReturnNoData: (value: boolean) => void };

export function nodeAdsMock(runtimeType: RuntimeType, error?: boolean, noData?: boolean): AdsClientMock {
  const eventEmitter = new EventEmitter();
  let returnNoData = noData;

  const options: AdsOptions = {
    host: 'string',
    amsNetIdTarget: 'string',
    amsNetIdSource: 'string',
    port: 1234,
    amsPortSource: 2345,
    amsPortTarget: 3456,
    timeout: 4567,
    localAddress: 'string',
    localPort: 5678,
    family: 0,
    verbose: 0,
  };

  const adsClient: AdsClientMock = Object.assign(eventEmitter, {
    options,
    connect: (cb: (this: AdsClient) => void) => {
      cb.call(adsClient);
    },
    end: (cb?: (this: Ads) => void) => {
      cb?.call(ads);
    },
    readDeviceInfo: (cb: (this: AdsClient, err: Error | null, result?: AdsReadDeviceInfoResult) => void) => {
      cb.call(adsClient, error ? new Error() : null, undefined);
    },
    read: (
      handle: AdsClientHandle,
      cb: (this: AdsClient, err: Error | null, handle: AdsClientHandleAnswer) => void
    ) => {
      cb.call(adsClient, error ? new Error() : null, {});
    },
    write: (handle: AdsClientHandle, cb: (this: AdsClient, err: Error | null) => void) => {
      cb.call(adsClient, error ? new Error() : null);
    },
    readState: (cb: (this: AdsClient, err: Error | null, result?: AdsReadStateResult) => void) => {
      cb.call(adsClient, error ? new Error() : null, undefined);
    },
    notify: (handle: AdsClientHandle, cb?: (this: AdsClient, err: Error | null) => void) => {
      cb?.call(adsClient, error ? new Error() : null);
    },
    releaseNotificationHandles: (cb: (this: Ads) => void) => {
      cb.call(ads);
    },
    releaseNotificationHandle: (handle: AdsClientHandle, cb: (this: Ads) => void) => {
      cb.call(ads);
    },
    writeRead: (handle: AdsClientHandle, cb: (this: Ads, err: Error | null, result: any) => void) => {
      cb.call(ads, error ? new Error() : null, {});
    },
    getSymbols: (cb: (this: AdsClient, err: Error | null, symbols?: AdsSymbol[]) => void, raw?: boolean) => {
      cb.call(
        adsClient,
        error ? new Error() : null,
        runtimeType === RuntimeType.TwinCat3 ? (returnNoData ? [] : tc3symbols) : []
      );
    },
    getDatatyps: (cb: (this: AdsClient, err: Error | null, datatyps?: AdsDatatyp[]) => void) => {
      cb.call(
        adsClient,
        error ? new Error() : null,
        runtimeType === RuntimeType.TwinCat3 ? (returnNoData ? [] : tc3datatyps) : []
      );
    },
    multiRead: (
      handles: AdsClientHandle[],
      cb: (this: AdsClient, err: Error | null, handles?: AdsClientHandleAnswer[]) => void
    ) => {
      cb.call(adsClient, error ? new Error() : null, undefined);
    },
    multiWrite: (
      handles: AdsClientHandle[],
      cb: (this: AdsClient, err: Error | null, handles?: AdsClientHandle[]) => void
    ) => {
      cb.call(adsClient, error ? new Error() : null, undefined);
    },
    getHandles: (
      handles: AdsClientHandle[],
      cb: (this: AdsClient, error: Error | null, handles?: AdsClientHandle) => void
    ) => {
      cb.call(adsClient, error ? new Error() : null, undefined);
    },
    setReturnNoData: (value: boolean) => {
      returnNoData = value;
    },
  });

  const ads: Ads = {
    connected: true,
    options: {
      host: 'string',
      amsNetIdTarget: 'string',
      amsNetIdSource: 'string',
      port: 1234,
      amsPortSource: 2345,
      amsPortTarget: 3456,
      timeout: 4567,
      localAddress: 'string',
      localPort: 5678,
      family: 0,
      verbose: 0,
    },
    invokeId: 1234,
    pending: {},
    symHandlesToRelease: [Buffer.from('symHandlesToRelease')],
    notificationsToRelease: [Buffer.from('notificationsToRelease')],
    notifications: {},
    dataStream: null,
    tcpHeaderSize: 2345,
    amsHeaderSize: 3456,
    adsClient,
  };

  return adsClient;
}
