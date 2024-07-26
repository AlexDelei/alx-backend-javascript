const chai = require('chai');
const req = require('request');

const expect = chai.expect;

describe('a one suite test for the index page', () => {
  it('performs an integration to our route /', () => {
    req('http://localhost:7865/', 'GET', (error, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
    });
  });

  it('checks if the GET / exists', () => {
    req('http://localhost:7865/', 'GET', (err, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
    });
  });

  it('checks for a non-existing route', () => {
    req('http://localhost:7865/home', 'GET', (err, respo, body) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('GET /cart/:id where id is provided and is a number', () => {
    req('http://localhost:7865/cart/9', 'GET', (err, respo, body) => {
      expect(respo.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 9');
    });
  });

  it('GET /cart/test where the param is a string', () => {
    req('http://localhost:7865/test', 'GET', (err, respo, body) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('GET /cart/ where id is not provided', () => {
    req('http://localhost:7865/cart/', 'GET', (err, respo, body) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

});
