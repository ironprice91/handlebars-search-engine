var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/apiController.js');
var languages = require('./models/search-data.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/search', apiController.search);

var server = app.listen(7797, function() {
	console.log('Express server listening on port ' + server.address().port);
});
