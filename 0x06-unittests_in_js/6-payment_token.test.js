const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('get payment token from api', () => {
  it('should return a successful response when called with true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      }).catch((err) => done(err));
  });
});
