var express = require('express');
var router = express.Router();
var burgers = require('../models')["burgers"];

router.delete('/delete/:id', function(req, res){
  burgers.destroy({ where: { id: [req.params.id] }
  });
  res.redirect('/');
});

router.post('/create', function (req, res) {
    burgers.create({ burger_name: req.body.burger_name }).then(res.redirect('/'));
});

router.put('/burgers/update/:id', function (req, res) {
   burgers.update({ devoured: req.body.devoured }, { where: {id: req.params.id} });
   res.redirect('/');
});
router.get('/', function(req, res) {
  burgers.findAll().then(function(burgers) {
    res.render('index', { burgers:burgers})
  })
});

module.exports = router;