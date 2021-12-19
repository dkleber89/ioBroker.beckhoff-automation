import { expect } from 'chai';

import datatype from '../../dev/datatyps.json';
import symbols from '../../dev/symbols.json';
import { loggerMock } from '../../test/utils/loggerMock';
import { RuntimeType } from '../NodeAdsClient';
import { NodeAdsVariableTable } from './NodeAdsVariableTable';

describe('Testing NodeAdsVariableTable', function () {
  it(`should return empty handles array`, function () {
    const nodeAdsVariableTable = new NodeAdsVariableTable(
      'wrongTable',
      RuntimeType.TwinCat3,
      loggerMock,
      datatype,
      symbols
    );

    expect(nodeAdsVariableTable.handles.length).to.be.equal(0);

    const nodeAdsVariableTable1 = new NodeAdsVariableTable(
      'GVL_test',
      RuntimeType.TwinCat2, // Wrong Runtime ... No handles should be selected
      loggerMock,
      datatype,
      symbols
    );

    expect(nodeAdsVariableTable1.handles.length).to.be.equal(0);
  });

  it(`should return 21 handles when test to GVL_test`, function () {
    const nodeAdsVariableTable = new NodeAdsVariableTable(
      'GVL_test',
      RuntimeType.TwinCat3,
      loggerMock,
      datatype,
      symbols
    );

    expect(nodeAdsVariableTable.handles.length).to.be.equal(21);
  });
});
