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
});
