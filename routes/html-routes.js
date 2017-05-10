
// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {

  app.get("/register", function(req, res) {

  	res.render("register");

});

  app.get("/auction", function(req, res) {

  	res.render("auction");

});

  app.get("/home", function(req, res) {

  	res.render("home");

});




}