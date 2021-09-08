declare module 'node-ads' {
  export enum AdsTypeLength {
    BOOL = 1,
    BYTE = 1,
    WORD = 2,
    DWORD = 4,
    SINT = 1,
    USINT = 1,
    INT = 2,
    UINT = 2,
    DINT = 4,
    UDINT = 4,
    LINT = 8,
    ULINT = 8,
    REAL = 4,
    LREAL = 8,
    TIME = 4,
    TIME_OF_DAY = 4,
    TOD = 4, // TIME_OF_DAY alias
    DATE = 4,
    DATE_AND_TIME = 4,
    DT = 4, // DATE_AND_TIME alias
    STRING = 81,
  }

  export enum AdsNotify {
    CYCLIC = 3,
    ONCHANGE = 4,
  }

  export interface AdsOptions {
    host: string;
    // The NetId of the target machine
    amsNetIdTarget: string;
    // The NetId of the source machine.
    // You can choose anything in the form of x.x.x.x.x.x,
    // but on the target machine this must be added as a route.
    amsNetIdSource: string;

    // OPTIONAL: (These are set by default)
    // The tcp destination port
    port?: number | string;
    // The ams source port
    amsPortSource?: number | string;
    // The ams target port for TwinCat Runtime
    amsPortTarget?: number | string;
    // The timeout for PLC requests
    timeout?: number;
  }

  interface AdsHandleInterface {
    // Handle name in twincat
    symname: string;
    // An ads type object or an array of type objects.
    // You can also specify a number or an array of numbers,
    // the result will then be a buffer object.
    // If not defined, the default will be BOOL.
    bytelength?: AdsTypeLength | AdsTypeLength[];
    // The propery name where the value should be written.
    // This can be an array with the same length as the array length of byteLength.
    // If not defined, the default will be 'value'.
    propname?: string | string[];
  }

  interface AdsNotificationHandleInterface extends AdsHandleInterface {
    // OPTIONAL: (These are set by default)
    // Notify.ONCHANGE, (other option is Notify.CYCLIC)
    transmissionMode?: AdsNotify;
    // Latest time (in ms) after which the event has finished
    maxDelay?: number;
    // Time (in ms) after which the PLC server checks whether the variable has changed
    cycleTime?: number;
  }

  type AdsHandleWithValues<H extends AdsHandleInterface, V extends Record<string, never>> = H &
    { [value in keyof V]?: V[value] };

  export type AdsHandle<V = { value }> = AdsHandleWithValues<AdsHandleInterface, V>;
  export type AdsNotificationHandle<V = { value }> = AdsHandleWithValues<AdsNotificationHandleInterface, V>;

  enum AdsClientEvent {
    Error = 'error',
    Notification = 'notification',
  }

  interface AdsClientEventDataMap {
    [AdsClientEvent.Error]: Error;
    [AdsClientEvent.Notification]: AdsNotificationHandle;
  }

  interface AdsClient {
    connect(options: AdsOptions, cb: () => void): void;
    end(): void;
    read(handle: AdsHandle, cb: (error: Error, handle: AdsHandle) => void): void;
    write(handle: AdsHandle, cb: (error: Error) => void): void;
    getSymbols(cb: (error: Error, symbols: any) => void): void;
    readState(cb: (error: Error, result: any) => void): void;
    on<K extends keyof AdsClientEventDataMap>(data: AdsClientEventDataMap[K]): void;
  }
}
