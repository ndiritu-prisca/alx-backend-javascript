const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    // Create a spy on console.log before each test
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    spy.restore();
  });

  it('should log the correct message for the first test', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledWithExactly('The total is: 120')).to.be.true;

    expect(spy.calledOnce).to.be.true;
  });

  it('should log the correct message for the second test', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledWithExactly('The total is: 20')).to.be.true;

    expect(spy.calledOnce).to.be.true;
  });
});
