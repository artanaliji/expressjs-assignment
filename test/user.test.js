process.env.NODE_ENV = "test";

let chai = require("chai");
let should = chai.should();
let chaiHttp = require("chai-http");
let server = require("../server");
chai.use(chaiHttp);

describe("Users", () => {
  describe("/GET users", () => {
    it("it should GET all users", (done) => {
      chai
        .request(server)
        .get("/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  describe("/POST user", () => {
    it("it should POST a user", (done) => {
      const user = {
        name: "Artan Aliji",
        email: "artanaliji@outlook.com",
      };

      chai
        .request(server)
        .post("/api/users")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("email");
          done();
        });
    });

    it("it should not POST a user without name field", (done) => {
      const user = {
        email: "artanaliji@outlook.com",
      };

      chai
        .request(server)
        .post("/api/users")
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql('"name" is required');
          done();
        });
    });

    it("it should not POST a user without email field", (done) => {
      const user = {
        name: "Artan Aliji",
      };

      chai
        .request(server)
        .post("/api/users")
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql('"email" is required');
          done();
        });
    });

    it("it should not POST a user with wrong email format", (done) => {
      chai
        .request(server)
        .post("/api/users")
        .send({
          name: "Name Updated",
          email: "artan@email",
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql('"email" must be a valid email');
          done();
        });
    });
    it("it should not POST a user with wrong websiteUrl format", (done) => {
      chai
        .request(server)
        .post("/api/users/")
        .send({
          name: "Artan Aliji",
          email: "artanaliji@outlook.com",
          websiteUrl: "htp://website.com",
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Validation isUrl on websiteUrl failed");
          done();
        });
    });
  });

  describe("/GET/:id user", () => {
    it("it should GET a user by the given id", (done) => {
      const userId = "1";
      chai
        .request(server)
        .get("/api/users/" + userId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("email");
          done();
        });
    });

    it("it should not GET a user by the given id", (done) => {
      const invalidUserId = "100";
      chai
        .request(server)
        .get("/api/users/" + invalidUserId)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("User not found");
          done();
        });
    });
  });

  describe("/PUT/:id user", () => {
    it("it should UPDATE a user by the given id", (done) => {
      const userId = "1";
      chai
        .request(server)
        .put("/api/users/" + userId)
        .send({
          name: "Name Updated",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name").eql("Name Updated");
          res.body.should.have.property("email");
          done();
        });
    });
    it("it should not UPDATE a user with wrong email format", (done) => {
      const userId = "1";
      chai
        .request(server)
        .put("/api/users/" + userId)
        .send({
          name: "Name Updated",
          email: "artan@email",
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql('"email" must be a valid email');
          done();
        });
    });
    it("it should not UPDATE a user with wrong websiteUrl format", (done) => {
      const userId = "1";
      chai
        .request(server)
        .put("/api/users/" + userId)
        .send({
          websiteUrl: "htp://website.com",
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Validation isUrl on websiteUrl failed");
          done();
        });
    });
  });

  describe("/DELETE/:id user", () => {
    it("it should DELETE a user by the given id", (done) => {
      const userId = "1";
      chai
        .request(server)
        .delete("/api/users/" + userId)
        .send()
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
