const chai = require('chai');
const req = require('request');
const { json } = require('express');

const expect = chai.expect;

describe('a one suite test for the index page', () => {
  const url = 'http://localhost:7865';

  it('GET / no strict slashes', () => {
    req(`${url}/`, 'GET', (_, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
    });
  });
  
  it('GET /cart/:id where id is provided and is a number', () => {
    req(`${url}/cart/9`, 'GET', (_, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 9');
    });
  });

  it('tests for negative id', () => {
    req(`${url}/cart/-10`, 'GET', (_, respo) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('GET /cartoon/:id invalid url', () => {
    req(`${url}/cartoon/89`, 'GET', (_, respo) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('GET /cart/test where the id is a string', () => {
    req(`${url}/cart/test`, 'GET', (_, respo) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('sends a request to GET /available_payments', () => {
    req(`${url}/available_payments`, 'GET', (_, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
      expect(respo.body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
    });
  });

  it('sends data  to POST /login', () => {
    const testData = { "userName": "Betty" }
      req({
        url: `${url}/login`,
        method: 'POST',
        json: testData,
      }, (_, respo, body) => {
        expect(respo.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
      });
  });
});