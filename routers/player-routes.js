var db = require("../models")

module.exports = function(app) {
	app.get("/api/players", function(req, res) {
		db.players.findAll({
			include: [db.Post]
		}).then(function(data) {
			res.json(data);
		});
	});

	app.get("/api", function(req, res) {
	  db.post.findAll({})
	  .then(function(data) {
	  	res.json(data)
	  });
	});
}

