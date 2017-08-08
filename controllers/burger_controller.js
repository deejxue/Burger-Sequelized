// Import NPM dependency and Express router function.
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require('../models');

// Create all our routes and set up logic within those routes where required.
// GET method
router.get("/", function(req, res) {
  db.Burger.findAll({
    }).then(function(dbBurger) {
      var hbsObject = {
        burger: dbBurger
      };
      res.render("index", hbsObject)
    });
});
// POST method route
router.post("/", function(req, res) {
  db.Burger.create(req.body).then(function() {
    res.redirect("/");
  });
});

// PUT method route
router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: req.body.devoured,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;