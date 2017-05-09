//npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creating the server
var app = express();
var port = process.env.PORT || 5500;

//code for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

//Allows access to external css files
app.use(express.static(path.join(__dirname, '/app/public/css/')));
//api & html routes
app.use(require('./app/routing/apiRoutes.js'));
app.use(require('./app/routing/htmlRoutes.js'));

//start the server
app.listen(port, function(){
	console.log('listening on port: ' + port);
});
