var db = require("../models");

module.exports = function(app) {
	app.get("/api/moderators", function(req, res) {
		db.post.findAll({
			include: [db.Post]
		})
	})
}