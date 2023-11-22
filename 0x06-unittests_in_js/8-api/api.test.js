const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('test the API with status, body', (done) => {
    request('http://localhost:7865', 'GET', (error, res, msg) => {
      if (error) throw error;
      expect(res.statusCode).to.equal(200);
      expect(msg).to.equal('Welcome to the payment system');
    });
    done();
  });
});
