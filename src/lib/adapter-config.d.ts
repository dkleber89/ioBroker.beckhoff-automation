// This file extends the AdapterConfig type from "@types/iobroker"

import { RuntimeType } from '../NodeAdsClient';

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
  namespace ioBroker {
    interface AdapterConfig {
      beckhoffRuntimeType: RuntimeType;
      targetIPAddress: string;
      targetAMSNetID: string;
      targetTCPPort: number;
      targetVariableTables: string[];
      timeout: number;
      reconnectInterval: number;
      adapterAMSNetID: string;
      adapterAMSPort: string;
      tpyFile?: string;
    }
  }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
