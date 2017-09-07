var db = require("../models");
var sha1 = require("sha1");

module.exports = function(app) {
	app.get("/api/sponsors", function(req, res) {
		db.sponsor.findAll({
			include: [db.Post]
		}).then(function(data) {
			res.json(data);
		});
	});

	app.post("/sponsors", function(req, res) {
		db.post.findAll({
			include: [db.sponsor],
			where: {
				sponsorId: req.body.id
			}

		}).then(function(data) {
			var array = [];
			for (var i = 0; i < data.length; i++) {
				array.push(data[i].dataValues)
			}
			res.render("sponsors", {posts: array});
		});
	});
  
	app.post("/newsponsor", function(req, res) {
		db.sponsor.create({
			name: req.body.name,
			email: sha1(req.body.email)
		}).then(function(data) {
			console.log(data.dataValues.id)
		})
	});

	app.post("/sponsor-login", function(req, res) {
		var username = req.body.name;
		var email = sha1(req.body.email);
		db.sponsor.findOne({
			where: {
				name: username,
				email: email
			}
		}).then(function(data) {
			res.send({id: data.dataValues.id});
		});
	});

	app.post("/create/post", function(req, res) {
		console.log(req.body);
		var title = req.body.title;
		var text = req.body.text;
		var points = req.body.points;
		var category = req.body.category;
		var sponsorId = req.body.id;
		db.post.create({
			title: title,
			text: text,
			points: points,
			category: category,
			sponsorId: sponsorId
		}).then(function(data) {
			res.redirect("/sponsors")
		})
	})
}