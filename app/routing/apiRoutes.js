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
    var differencesArr = [];
    var friendsListArr = [];

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


      var compTotals = 0;
      // var compArr = [];
      for (var j = 0; j < 10; j++) {
        compTotals += parseInt(comparisonScores[j]);
        var scoreDiff = Math.abs(compTotals - newScore);
      }
      differencesArr.push(scoreDiff);

      var minDiff = Math.min.apply(null, differencesArr);
      console.log("The min diff is: " + minDiff);

      console.log('Comp totals are: ' + compTotals);
      console.log("The score diffs are: " + scoreDiff);
      console.log("The differences array: " + differencesArr);

      //to match the friend
      friendsListArr.push({
        name: friends[i].name,
        photo: friends[i].photo,
        scoreDiff: scoreDiff
      });

      if (minDiff === friendsListArr[i].scoreDiff) {
        var bestFriend = friendsListArr[i];
      }
      console.log("Your best friend is: " + JSON.stringify(bestFriend));
    }

    console.log("The friends list arr: " + JSON.stringify(friendsListArr));

    //add newFriend to the friends array
    friends.push(newFriend);

    //pass the bestFriend into the apiRoutes
    res.json(bestFriend);

  });
};
