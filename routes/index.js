var express = require('express');
var router = express.Router();

var TeamModel = require('../db/mongoose').TeamModel;


/* GET home page. */
router.get('', function(req, res, next) {
    console.log("ololo")
    res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
    console.log(req.params["id"])
    res.sendFile('./index.html', { title: 'Express' });
});

/* POST vote */
router.post('/vote', function(req, res, next) {
    console.log(req.body)
    return res.send({ status: 'OK'});
});

router.post('/api/team', function(req, res) {
    console.log(req);
    var team = new TeamModel({
        name: req.body.team_name,
        image_url: req.body.image_url
    });
    return res.send({ status: 'OK', team_id: team._id });
});

router.get('/api/team', function(req, res) {
    var team = new TeamModel({
        name: req.body.name,
        image_url: req.body.image_url
    });
    return res.send({ status: 'OK', team_id: team._id });
});

module.exports = router;
