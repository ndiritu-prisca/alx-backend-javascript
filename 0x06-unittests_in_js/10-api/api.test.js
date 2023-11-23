const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('responds with status 200 and correct result for GET /', (done) => {
    request('http://localhost:7865', 'GET', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('test cart page for correct response with number', (done) => {
    request('http://localhost:7865/cart/12', 'GET', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('test cart page for correct response with string', (done) => {
    request('http://localhost:7865/cart/twelve', 'GET', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login page', () => {
  it('responds with status 200 and correct result for POST /login', (done) => {
    const login_obj = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'Betty',
      }
    };
    request(login_obj, 'POST', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Available payments page', () => {
  it('responds with status 200 and correct result for GET /available_payments', (done) => {
    request('http://localhost:7865/available_paymnets', 'GET', (error, res, body) => {
      if (error) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);

        const obj = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
        expect(body).to.deep.equal(obj);
      }

      done();
    });
  });
});