var friends = require("../data/friends");

module.exports = function (app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function (req, res) {

    return res.json(friends);

  });

  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function (req, res) {
    //newFriend values
    var newFriend = req.body;
    var newFriendName = req.body.name;
    var newFriendPhoto = req.body.photo;

    //newFriend scores
    var surveyScores = req.body.scores;
    var newScore = 0;

    //run a for loop to grab the scores from the array and add them up
    for (var i = 0; i < surveyScores.length; i++) {
      newScore += parseInt(surveyScores[i]);
    }

    console.log("New Friends score is: " + newScore);


    //trying to get the totals of each of the friends scores
    for (var i = 0; i < friends.length; i++) {
      var comparisonScores = friends[i].scores;
      var userTotals = 0;
      //this doesn't work
      for (var i = 0; i < comparisonScores.length; i++) {
        userTotals += parseInt(comparisonScores[i]);
      }
      // comparisonScores += parseInt(friends[i].scores[i]);
      console.log(userTotals);
    }

    function calculateTotals() {
      userTotals += parseInt(comparisonScores[i]);
    }

    // var savedFriendsScores = friends[i].scores;
    // console.log(friends[i].scores);

    // console.log(newFriend);
    //add newFriend to the friends array
    friends.push(newFriend);

    //pass the newFriend into the apiRoutes
    res.json(newFriend);

  });


};