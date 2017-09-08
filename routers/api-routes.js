var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
    var array = [];
    var array2 = [];


    app.get("/leaderboard", function(req, res) {

            db.sponsor.findAll({
                order: [
                    ['points', 'DESC']
                ],
            }).then(function(data) {
                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    array.push(data[i].dataValues)
                }

            });

            db.player.findAll({
                order: [
                    ['points', 'DESC']
                ],
            }).then(function(data) {
                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    array2.push(data[i].dataValues)
                }
                                
                res.render("leaderboard", { sponsors: array, players: array2 });

            });

    });
}


