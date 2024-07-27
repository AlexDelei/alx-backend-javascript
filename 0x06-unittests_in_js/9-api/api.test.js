const chai = require('chai');
const req = require('request');

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

  it('GET /cart/:id invalid url', () => {
    req(`${url}/cartoon/89`, 'GET', (_, respo) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });

  it('GET /cart/test where the id is a string', () => {
    req(`${url}/cart/test`, 'GET', (_, respo) => {
      expect(respo.statusCode).to.be.equal(404);
    });
  });
});
