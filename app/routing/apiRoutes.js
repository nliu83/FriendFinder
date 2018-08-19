
// linking routes of data sources into friendsArray

var friendsData = require('../data/friends');


module.exports = function(app) {

    // API GET request. handles when user visits a page. 

    app.get('/api/friends', function(request, response) {
        response.json(friendsData);
    });

    // API POST request. when user submits a form and submits data to the server. data will be in the form of JSON object to javascript and saves to friendsArray

    app.post('/api/friends', function(request, response) {

        var friendMatch = {

            name: '',
            photoLink: '', 
            surveyDiff: 100

        }

        var userInfo = request.body;
        var userScore = userInfo.scores;

        console.log(userScore);

        var difference;

        for (var i = 0; i < friendsData.length; i++) {

            console.log(friendsData[i]);

            difference = 0;

            for (var j = 0; j < friendsData[i].scores.length; j++) {

                //difference = absolute value of user sccores and the ones in the friends array. 
                difference += Math.abs(parseInt(userScore[j] - parseInt(friendsData[i].scores[j])));


            }
            if (difference <= friendMatch.surveyDiff) {
                friendMatch.name = friendsData[i].name;
                friendMatch.photoLink = friendsData[i].photoLink;
                friendMatch.surveyDiff = difference
            }
        };

        friendsData.push(userInfo);
        console.log(friendMatch)
        response.json(friendMatch);

    });

};

