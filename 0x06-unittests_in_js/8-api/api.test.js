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
