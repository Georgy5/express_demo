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

describe("GET /", () => {
  beforeEach(async () => {
    response = await request.get("/?message=Uranus")
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("is expected to respond with some HTML", () => {
    expect(response.text).to.equal('<h1>Hello Uranus!</h1>');
  });
});
