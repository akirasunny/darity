var db = require("../models");
var sha1 = require("sha1");

module.exports = function(app) {
	app.get("/api/sponsors", function(req, res) {
		db.sponsors.findAll({
			include: [db.Post]
		}).then(function(data) {
			res.json(data);
		});
	});

	app.post("/newsponsor", function(req, res) {
		db.sponsors.create({
			name: req.body.name,
			email: sha1(req.body.email)
		})
	});

	app.post("/sponsor-login", function(req, res) {
		var username = req.body.name;
		var email = req.body.email;
		db.sponsors.findOne({
			where: {
				name: username,
				email: email
			}
		}).then(function(data) {
			res.redirect("/sponsor");
		})
	})
}