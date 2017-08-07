// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var Burger = require('../models')['Burger'];

// Import data model.
var db = require('../models');

// GET route which calls uses Sequelize's findAll method.
// This route then hands the data it receives to handlebars so index can be rendered.
router.get('/', function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = { Burger: data }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// POST route which calls Sequelize's create method with the burger name given.
router.post('/', function (req, res) {
    db.Burger.create({
        burger_name: req.params.burger_name,
        devoured: req.params.devoured
    }).then(function () {
        res.redirect('/');
    });
});

// PUT (update) route which calls Sequelize's update method to make the burger available to eat again..
// Sends the id to identify which burger. Clears out CustomerId.
router.put('/burgers/update/:id', function (req, res) {
    db.Burger.update(
        {devoured: req.params.devoured},
        {where: {id: ID}}
    ).then(function () {
        res.redirect('/');
    });
});

// Export routes for server.js.
module.exports = router;