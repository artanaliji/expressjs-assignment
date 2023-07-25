//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let chai = require("chai");
let should = chai.should();
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);

describe("Test", () => {
  /*
   * Test the /GET route
   */
  describe("/GET test", () => {
    it("it should GET all the dummy data", (done) => {
      chai
        .request(server)
        .get("/api/test")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.gt(0);
          done();
        });
    });
  });
});
