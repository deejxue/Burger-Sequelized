// Import NPM dependency and Express router function.
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require('../models');

// Create all our routes and set up logic within those routes where required.
// GET method
router.get("/", function(req, res) {
  db.burger.findAll(
    ).then(function(dbBurger) {
      var hbsObject = {
        burger: dbBurger
      };
      console.log(dbBurger);
      res.render("index", hbsObject)
    });
});
// POST method route
router.post("/", function(req, res) {
  db.burger.create(req.body).then(function() {
    res.redirect("/");
  });
});

// PUT method route
router.put("/:id", function(req, res) {
  db.burger.update({
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