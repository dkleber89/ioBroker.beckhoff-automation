import { AdapterInstance } from '@iobroker/adapter-core';
import { utils } from '@iobroker/testing';
import { expect } from 'chai';

import tc3Datatyps from '../../test/utils/mockData/tc3datatyps.json';
import tc3Symbols from '../../test/utils/mockData/tc3symbols.json';
import { nodeAdsMock } from '../../test/utils/nodeAdsMock';
import { RuntimeType } from '../Beckhoff';
import { PlcStructure } from './PlcStructure';

describe('plcStructure', function () {
  it('should create correct structure from TwinCat 3 data', function (done) {
    const { adapter } = utils.unit.createMocks({});
    const nodeAdsClient = nodeAdsMock(RuntimeType.TwinCat3);

    const plcStructure = new PlcStructure(adapter as unknown as AdapterInstance, nodeAdsClient, true, () =>
      console.log('Error')
    );

    plcStructure.onUpdated((datatyps, symbols) => {
      try {
        expect(datatyps).deep.equal(tc3Datatyps);
        expect(symbols).deep.equal(tc3Symbols);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
