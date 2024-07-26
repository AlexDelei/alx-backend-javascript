const chai = require('chai');
const req = require('request');

const expect = chai.expect;

describe('a one suite test for the index page', () => {
  it('performs an integration to our route /', () => {
    req('http://localhost:7865/', 'GET', (error, respo, body) => {
      if (error) throw error;
      expect(respo.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
    });
  });
});
