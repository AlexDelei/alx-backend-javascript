const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./api');

chai.use(chaiHttp);
chai.should();

describe('a one suite test for the index page', () => {
  it('performs an integration to our route /', (done) => {
    chai.request(app)
      .get('/')
      .end((error, res) => {
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(res.text).to.equal('Welcome to the payment system');
        done();
      })
  })
})
