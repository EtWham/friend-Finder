//server & path requirement
var express = require("express");
var path = require("path");

var bodyParser = require('body-parser')

//function routing to specific pages when user visits the site
module.exports = function(app) {
  // default route which displays the home page
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

//route which displays the survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
};
