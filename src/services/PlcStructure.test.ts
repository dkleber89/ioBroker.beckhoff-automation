import { readFileSync } from 'fs';

import { AdapterInstance } from '@iobroker/adapter-core';
import { utils } from '@iobroker/testing';
import { expect } from 'chai';
import { afterEach } from 'mocha';

import tc3Datatyps from '../../test/utils/mockData/tc3datatyps.json';
import tc3Symbols from '../../test/utils/mockData/tc3symbols.json';
import { nodeAdsMock } from '../../test/utils/nodeAdsMock';
import { RuntimeType } from '../Beckhoff';
import { PlcStructure } from './PlcStructure';

const plcStructure = readFileSync('./test/utils/mockData/plcStructure.tpy', { encoding: 'utf-8' });

const config: Partial<ioBroker.AdapterConfig> = {
  beckhoffRuntimeType: RuntimeType.TwinCat3,
  tpyFile: { name: 'plcStructure.tpy', data: plcStructure },
};

const { adapter, database } = utils.unit.createMocks({ config });

describe('plcStructure', function () {
  afterEach(() => {
    adapter.resetMockHistory();
    database.clear();
  });

  it('should create correct structure from TwinCat 3 data', function (done) {
    const nodeAdsClient = nodeAdsMock(RuntimeType.TwinCat3);

    const plcStructure = new PlcStructure(adapter as unknown as AdapterInstance, nodeAdsClient, true, () =>
      done(new Error('Error was thrown'))
    );

    let first = true;

    plcStructure.onUpdated((datatyps, symbols) => {
      if (first) {
        first = false;

        try {
          expect(datatyps).deep.equal(tc3Datatyps);
          expect(symbols).deep.equal(tc3Symbols);

          expect(plcStructure.datatyps).deep.equal(tc3Datatyps);
          expect(plcStructure.symbols).deep.equal(tc3Symbols);

          nodeAdsClient.setReturnNoData(true);

          plcStructure.update();
        } catch (e) {
          done(e);
        }
      } else {
        try {
          expect(datatyps).equal(null);
          expect(symbols).equal(null);

          expect(plcStructure.datatyps).deep.equal(null);
          expect(plcStructure.symbols).deep.equal(null);
          done();
        } catch (e) {
          done(e);
        }
      }
    });
  });

  it('should get Error when not able to fetch data from TwinCat 3', function (done) {
    const nodeAdsClient = nodeAdsMock(RuntimeType.TwinCat3, true);

    const plcStructure = new PlcStructure(adapter as unknown as AdapterInstance, nodeAdsClient, true, () => {
      done();
    });

    plcStructure.onUpdated(() => {
      done(new Error('onUpdate called'));
    });
  });

  it('should generate plc structure from tpy file', function (done) {
    adapter.config.beckhoffRuntimeType = RuntimeType.TwinCat2WithConfigFile;

    const nodeAdsClient = nodeAdsMock(RuntimeType.TwinCat2WithConfigFile);

    const plcStructure = new PlcStructure(adapter as unknown as AdapterInstance, nodeAdsClient, true, () => {
      done(new Error('onError called'));
    });

    plcStructure.onUpdated((datatyps, symbols) => {
      console.log(datatyps);
      console.log(symbols);
    });
  });
});
