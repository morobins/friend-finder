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

    //scores for each existing friend
    for (var i = 0; i < friends.length; i++) {
      var comparisonScores = friends[i].scores;
      console.log('Comparison scores are: ' + comparisonScores);
    }
    console.log('Comp array is: ' + comparisonArr);

    //loop through friend to get the difference of the friends scores 
    //ASK ABOUT THIS - how have the numbers been added up in order to be subtracted from each other
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var k = 0; k < 10; k++) {
        scoreDiff = Math.abs(friends[i].scores[k] - newFriend.scores[k]);
        totalDifference += scoreDiff;
      }

      console.log("Total Difference is: " + totalDifference);
    }


    //add newFriend to the friends array
    friends.push(newFriend);

    //pass the newFriend into the apiRoutes
    res.json(newFriend);

  });


};