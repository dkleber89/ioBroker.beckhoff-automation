import { AdsDatatyp, AdsSymbol } from 'node-ads';

export class NodeAdsVarSync {
  private _targetVarTable: string;

  constructor(targetVarTable: string) {
    this._targetVarTable = targetVarTable;
  }

  public updateSymbols(datatyps: AdsDatatyp[], symbols: AdsSymbol[]) {}
}
