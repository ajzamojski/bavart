
// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {


	// POST route for saving a new post
  app.post("/api/user", function(req, res) {

    db.User.create(req.body).then(function(results) {
    	console.log(results);
      // res.json(dbPost);
    });
  });



}