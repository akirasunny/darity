var db = require("../models");
var sha1 = require("sha1");

module.exports = function(app) {
	app.get("/api/players", function(req, res) {
		db.player.findAll({
			order: [['points', 'DESC']]
		}).then(function(data) {
			console.log(data);
		var array = [];
			for (var i = 0; i < data.length; i++) {
				array.push(data[i].dataValues)
			}
			res.render("leaderboard", {players: array});
		});
	});


	app.get("/api/posts", function(req, res) {
	  db.post.findAll({})
	  .then(function(data) {
	  	res.json(data)
	  });
	});

app.post("/newplayer", function(req, res) {
		db.player.create({
			name: req.body.name,
			email: sha1(req.body.email)
		}).then(function(data) {
			console.log(data.dataValues.id)
		})
	});

	app.post("/player-login", function(req, res) {
		var username = req.body.name;
		var email = sha1(req.body.email);
		db.player.findOne({
			where: {
				name: username,
				email: email
			}
		}).then(function(data) {
			res.send({id: data.dataValues.id});
		});
	});
};