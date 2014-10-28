var Languages = require('../models/search-data.json');

var apiController = {
	search: function(req, res){	
		res.send(Languages);
	}
};

module.exports = apiController;