
var path = require('path');


module.exports = function(app) {

    //html GET Request. allows user to 'visit page. 

    app.get('/survey', function(request, response) {

        response.sendFile(path.join(__dirname, '../public/survey.html'));

    });

    app.get('*', function(request, response) {

        response.sendFile(path.join(__dirname, '../public/home.html'));

    });
};

