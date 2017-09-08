// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/", function(req, res) {
    res.render("index");
  });

app.get("/about", function(req, res) {
    res.render("about");
  });

app.get("/faqs", function(req, res) {
    res.render("faqs");
  });

app.get("/myprofile", function(req, res) {
    res.render("myprofile");
  });

app.get("/portal", function(req, res) {
    res.render("portal");
  });

app.get("/sponsors", function(req, res) {
    res.render("sponsors");
  });

app.get("/moderators", function(req, res) {
    res.render("moderators");
  });

app.get("/create", function(req, res) {
    res.render("create");
  });

app.get("/post", function(req, res) {
    res.render("post");
  });

app.get("/login", function(req, res) {
    res.render("login");
  });

app.get("/login2", function(req, res) {
    res.render("login2");
  });

app.get("/proof", function(req, res) {
    res.render("proof");
  });
};


//