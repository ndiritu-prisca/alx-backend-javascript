const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('responds with status 200 and correct result for GET /', (done) => {
    request('http://localhost:7865', 'GET', (error, res, msg) => {
      expect(res.statusCode).to.equal(200);
      expect(msg).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('test cart page for correct response with number', (done) => {
    request('http://localhost:7865/cart/12', 'GET', (error, res, msg) => {
      expect(res.statusCode).to.equal(200);
      expect(msg).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('test cart page for correct response with string', (done) => {
    request('http://localhost:7865/cart/twelve', 'GET', (error, res, msg) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
