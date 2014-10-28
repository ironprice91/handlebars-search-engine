var Languages = require('../models/search-data.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res){
		console.log(Languages);
		console.log(Languages[0]);
		console.log(Languages.programming.Python);
		console.log(Languages.programming);
		res.send(req.query);
	}
};

module.exports = indexController;