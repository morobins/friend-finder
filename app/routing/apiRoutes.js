// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {

  // Get ALL tables/reservations
  app.get('/api/friends', function(req, res) {
  
    return res.json();

  });

  // POST a new reserveration
  app.post('/api/friends', function(req, res) {

    var newFriend = req.body;

    console.log(newFriend);

    SOMETHING.push(newFriend);

    res.json(newFriend);

  });


};