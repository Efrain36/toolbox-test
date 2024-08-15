const chai = require('chai');
const chaiHttp = require('chai-http');
const { it } = require('mocha');
const app = require('../../index');


chai.use(chaiHttp);
const expect = chai.expect;

describe('File Controller', () => {
  describe('GET /files/data', () => {
    it('Should retrieve data for a specific file', async () => {
      const res = await chai.request(app).get('/files/data').query({ fileName: 'test2.csv' });
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });

    it('Should retrieve data for all files', async () => {
      const res = await chai.request(app).get('/files/data');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('GET /files/list', () => {
    it('Should retrieve all files', async () => {
      const res = await chai.request(app).get('/files/list');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  });
});