var path = require("path");

//module.exports exports this to server.js
module.exports = function (app) {
  //home route
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  //A GET Route to display the survey page.
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // A default, catch-all route that leads to home.html which displays the home page.
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

};