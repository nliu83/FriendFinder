 
// 'requiring' npm packages

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8888;

// setting up express to handle body parsing

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// directs the server to the route files and how to respond when users visit or request data from URLs

require('./app/routing/apiRoutes')(app);

require('./app/routing/htmlRoutes')(app);

// starting server

app.listen(PORT, function() {

     console.log('Listening on PORT ' + PORT);
    
});