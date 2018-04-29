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


      var compTotals = 0;
      // var compArr = [];
      for (var j = 0; j < 10; j++) {
        compTotals += parseInt(comparisonScores[j]);
        var scoreDiff = Math.abs(compTotals - newScore);
      }
      console.log('Comp totals are: ' + compTotals);
      console.log("The score diffs are: " + scoreDiff);
    }
    // console.log(comparisonScoresArr);

    // for (var i = 0; i < friends.length; i++) {
    //   var totalDifference = 0;
    //   for (var k = 0; k < 10; k++) {
    //     var scoreDiff = Math.abs(friends[i].scores[k] - newFriend.scores[k]);
    //     totalDifference += scoreDiff;

    //   }
    //   console.log("Total Difference is: " + totalDifference);
    // };


    // friendsListArr.push({
    //   name: friends[i].name,
    //   photo: friends[i].photo,
    //   scoreDiff: totalDifference
    // });


    // console.log("New Friends List: " + friendsListArr);




    // var pickedFriend = Math.min(totalDifference);
    // console.log("Picked Friend is: " + pickedFriend);


    //add newFriend to the friends array
    friends.push(newFriend);

    //pass the newFriend into the apiRoutes
    res.json(newFriend);




  });
};

//how do I create an list of the total differences to find the min
//how does it know which friend the min relates to