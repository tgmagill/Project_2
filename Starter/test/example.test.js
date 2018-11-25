let chai = require("chai");
let chaiHttp = require("chai-http");
let expect = chai.expect;
let server = require("../server");
let db = require("../models");

chai.use(chaiHttp);

describe("GET api/examples", function(){

    this.beforeEach(function(){
        requeset = chai.request(server);
        return db.sequelize.sync({force: true })
    });

    it("should get all examples", function(){
        db.Example.BulkCreate([
            {text: "test1", description:"fist description"},
            {text: "test2", description: "second example. "}
        ]).then(function(){
            request.get("/api/examples").end(function(err, res){
                var responseStatus = res.status;
                var responseBody = res.body;

                expect(err).to.be.null;
                expect(responseStatus).to.equal(200);
                expect(responseBody).to.be.an("array").that.has.lengthOf(2);
             //done is required for our async test. 
              done();
            });
         
        });
    });

});