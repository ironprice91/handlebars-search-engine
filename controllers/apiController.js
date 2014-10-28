var Languages = require('../models/search-data.json');

var apiController = {
	search: function(req, res){
		console.log(Languages.programming);
		res.send(Languages.programming);
	}
};

module.exports = apiController;