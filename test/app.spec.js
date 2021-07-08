const chai = require('chai');
const expect = chai.expect;
const app = require("../app");
const supertest = require('supertest');

let server, request, response;

before((done) => {
  console.log("Hello app");
  server = app.listen(done);
  console.log(server);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

describe("GET /", () => {
  beforeEach(async () => {
    console.log(request);
    response = await request.get("/?message=Uranus");
  });

  it("is expected to respond with status 200", () => {
    console.log("Hello");
    expect(response.status).to.equal(200);
  });
  
  it("is expected to respond with some HTML", () => {
    expect(response.text).to.equal('<h1>Hello Uranus!</h1>');
  });
});
