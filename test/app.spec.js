const chai = require('chai');
const expect = chai.expect;
const app = require('../app');
const supertest = require('supertest');

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});
