// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
<<<<<<< HEAD
//var PORT = process.env.PORT;
var PORT = 3002;
=======
//var PORT = 3002;
 var PORT = process.env.PORT;
>>>>>>> 678d3fe730c9f2c2d19034dd0f1ea0119ad6927c
// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));
//app.use(express.static(path.join(__dirname, './app')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});