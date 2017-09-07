// dependencies

var express = require("express");
var method = require("method-override");
var body = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var port = process.env.PORT || 3000;

// app set-ups

app.use(express.static("public"));
app.use(body.urlencoded({extended: false}));
app.use(method("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routers/html-routes.js")(app);
require("./routers/moderator-routes.js")(app);
require("./routers/player-routes.js")(app);
require("./routers/sponsor-routes")(app);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("Connected to port " + port);
	});
});