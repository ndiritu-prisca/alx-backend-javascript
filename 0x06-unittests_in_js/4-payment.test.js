const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log the result', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
