var db = require("../models")

module.exports = function(app) {
	app.get("/api/sponsors", function(req, res) {
		db.sponsors.findAll({
			include: [db.Post]
		}).then(function(data) {
			res.json(data);
		});
	});
}