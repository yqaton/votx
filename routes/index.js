var express = require('express');
var router = express.Router();

var TeamModel = require('../db/mongoose').TeamModel;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST vote */
router.post('/vote', function(req, res, next) {
  console.log(req.body)
});

router.post('/team', function(req, res) {
    var team = new TeamModel({
        name: req.body.name,
        image_url: req.body.image_url
    });
    team.save();
    return res.send({ status: 'OK', team: team });
});

module.exports = router;
