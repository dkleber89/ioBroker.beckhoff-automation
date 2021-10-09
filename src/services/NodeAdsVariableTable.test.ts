/**
 * This is a dummy TypeScript test file using chai and mocha
 *
 * It's automatically excluded from npm and its build output is excluded from both git and npm.
 * It is advised to test all your modules with accompanying *.test.ts-files
 */

import { createLoggerMock, MockLogger } from '@iobroker/testing/build/tests/unit/mocks/mockLogger';
import { expect } from 'chai';

import datatype from '../../dev/datatyps.json';
import symbols from '../../dev/symbols.json';
import { RuntimeType } from '../NodeAdsClient';
import { NodeAdsVariableTable } from './NodeAdsVariableTable';

describe('Testing NodeAdsVariableTable', function () {
  let mockLogger: MockLogger | undefined;

  before(function () {
    mockLogger = createLoggerMock();
  });

  it(`should return empty handles`, function () {
    if (!mockLogger) {
      throw new Error('Mock Logger not working');
    }

    const nodeAdsVariableTable = new NodeAdsVariableTable('fisch', RuntimeType.TwinCat3, mockLogger, datatype, symbols);

    expect(nodeAdsVariableTable.handles.length).to.be.equal(0);
  });

  it(`should return handles`, function () {
    if (!mockLogger) {
      throw new Error('Mock Logger not working');
    }

    const nodeAdsVariableTable = new NodeAdsVariableTable(
      'GVL_test',
      RuntimeType.TwinCat3,
      mockLogger,
      datatype,
      symbols
    );

    expect(nodeAdsVariableTable.handles.length).to.be.equal(24);
  });
});
