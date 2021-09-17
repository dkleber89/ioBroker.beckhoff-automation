// Common Datatypes
export interface DeviceInfo {
  majorVersion: number;
  minorVersion: number;
  versionBuild: number;
  deviceName: string;
}

// TwinCat3 Datatypes
interface Datatyps {
  index: number;
  version: number;
  size: number;
  dataType: number;
  arrayDim: number;
  subItems: number;
  name: string;
  type: string;
  comment: string;
}

export interface Tc3Datatyps {
  index?: number;
  version: number;
  size: number;
  dataType: number;
  arrayDim: number;
  subItems: number;
  name: string;
  type: string;
  comment: string;
  datatyps?: Datatyps[];
}

export interface Tc3Symbols {
  indexGroup: number;
  indexOffset: number;
  size: number;
  name: string;
  type: string;
  comment: string;
  arrayid?: number;
}
