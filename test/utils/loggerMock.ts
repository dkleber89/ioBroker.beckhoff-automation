type LogLevel = 'silly' | 'debug' | 'info' | 'warn' | 'error';

interface LoggerMock {
  level: LogLevel;

  silly: (message: string) => void;
  /** log message with debug level */
  debug: (message: string) => void;
  /** log message with info level (default output level for all adapters) */
  info: (message: string) => void;
  /** log message with warning severity */
  warn: (message: string) => void;
  /** log message with error severity */
  error: (message: string) => void;
}

export const loggerMock: LoggerMock = {
  level: 'silly',

  silly(message: string): void {
    console.log(`Silly: ${message}`);
  },

  /** log message with debug level */
  debug(message: string): void {
    console.log(`Debug: ${message}`);
  },

  /** log message with info level (default output level for all adapters) */
  info(message: string): void {
    console.log(`Info: ${message}`);
  },

  /** log message with warning severity */
  warn(message: string): void {
    console.warn(`Warn: ${message}`);
  },

  /** log message with error severity */
  error(message: string): void {
    console.error(`Error: ${message}`);
  },
};
