// This file extends the AdapterConfig type from "@types/iobroker"

import { RuntimeType } from '../Beckhoff';

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
  namespace ioBroker {
    interface TpyFile {
      name: string;
      data: string;
    }
    interface AdapterConfig {
      beckhoffRuntimeType: RuntimeType;
      targetIPAddress: string;
      targetAMSNetID: string;
      targetAMSPort: number;
      targetTCPPort: number;
      targetVariableTables: string[];
      adapterAMSNetID: string;
      adapterAMSPort: number;
      adapterTCPPort: number;
      timeout: number;
      reconnectInterval: number;
      tpyFile?: TpyFile | null;
    }
  }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
