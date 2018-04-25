// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var bodyParser = require("body-parser");


// initialize our server
var app = express();

// Define port
var PORT = process.env.PORT || 3000;

// Set up middleware (body-parser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Turn on server
app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});


