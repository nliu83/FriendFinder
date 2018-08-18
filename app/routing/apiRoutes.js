
// linking routes of data sources into friendsArray

var friendsData = require('../data/friends');


module.exports = function(app) {

    // API GET request. handles when user visits a page. 

    app.get('/api/friends', function(request, response) {
        response.json(friendsData);
    });

    // API POST request. when user submits a form and submits data to the server. data will be in the form of JSON object to javascript and saves to friendsArray

    app.post('/api/friends', function(request, response) {

        friendsData.push(request.body);
        res.json(true);

        console.log(friendsData);
    });

};

