// REQUIRE Express, create variables for router and burgersvar db = require('../models');
var db = require("../models");

// Routes
// ====================================
module.exports = function(app) {
  // get all the burgers and list them with this GET method 
  app.get('/api', function(req, res) {
    // findAll returns all entries for a table when used with no options
      db.burgers.findAll().then(function(burgers) {
      // We have access to the burgers as an argument inside of the callback function
        res.redirect('../layouts/index', {burgers:burgers});
    });
  });

  // create new burgers with this POST method 
  app.post('/api/create', function (req, res) {
      db.burgers.create({ 
          burger_name: req.body.burger_name,
          devoured: false
      }).then(function(dbBurgers) {
          res.redirect('/api');
      });
    });

  // update the burger list with this PUT method
  app.put('/api/burgers/update/:id', function (req, res) {
     db.burgers.update({ 
      devoured: req.body.devoured 
  }, { 
      where: {
          id: req.body.id
      } 
    }).then(function(dbBurgers) {
      res.redirect('/api');
    });
  });

  // delete a burger with this DELETE method
  app.delete('/api/delete/:id', function(req, res){
    db.burgers.destroy({ 
      where: { 
          id: req.body.id 
      }
    }).then(function(dbBurgers) {
      res.redirect('/api');
    });
  });
};