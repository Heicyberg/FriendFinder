var bodyParser = require('body-parser')
// LOAD DATA
var friendsData = require("../data/friends");
// ROUTING
module.exports = function(app) {
    // API GET Requests
  
    app.get("/data/friends", function(req, res) {
      res.json(friendsData);
    });
  
    // API POST Requests
  
    app.post("/data/friends", function(req, res) {

      friendsData.push(req.body);
    });
  
  };
