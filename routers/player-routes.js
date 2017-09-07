var db = require("../models")
var sha1 = require("sha1");

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

module.exports = function(app) {
	app.get("/players", function(req, res) {
		db.post.findAll({}).then(function(data) {
			var shuffled = shuffle(data);
			res.render("players", {posts: shuffled});
		});
	});

	app.post("/join/:id",function(req, res) {
		db.post.findAll({
			where: {
				id: req.params.id
			},
			include: [{
				through: {
					attributes: ["playerId", "postId"]
				}
			}]
		}).then(function(data) {
			res.redirect("/players");
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