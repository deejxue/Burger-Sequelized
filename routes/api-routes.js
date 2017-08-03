// REQUIRE Express, create variables for router and burgersvar db = require('../models');
var db = require("../models");

// Routes
// ====================================
module.exports = function(app) {
  // get all the burgers and list them with this GET method 
  app.get('/', function(req, res) {
    // findAll returns all entries for a table when used with no options
      db.burgers.findAll().then(function(burgers) {
      // We have access to the burgers as an argument inside of the callback function
        res.render('index', {burgers:burgers});
    });
  });

  // create new burgers with this POST method 
  app.post('/api/', function (req, res) {
      db.burgers.create({ 
          burger_name: req.body.burger_name,
          devoured: false
      }).then(function(dbBurgers) {
          res.redirect('/');
      });
    });

  // update the burger list with this PUT method
  app.put('/api/:id', function (req, res) {
     db.burgers.update({ 
      devoured: req.body.devoured 
  }, { 
      where: {
          id: req.body.id
      } 
    }).then(function(dbBurgers) {
      res.redirect('/');
    });
  });

  // delete a burger with this DELETE method
  app.delete('/api/:id', function(req, res){
    db.burgers.destroy({ 
      where: { 
          id: req.body.id 
      }
    }).then(function(dbBurgers) {
      res.redirect('/');
    });
  });
};