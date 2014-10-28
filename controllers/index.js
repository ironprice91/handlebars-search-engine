var Languages = require('../models/search-data.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
};

module.exports = indexController;