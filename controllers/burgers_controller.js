var express = require("express");
var router = express.Router();
// Imports the model BORGER (burger.js)
let borger = require('../models/burger.js');
// And now for the routers

router.get('/', function (req, res) {
    res.redirect
});

router.get('/index', function (req, res) {
    burger.selectall(function (data) {
        res.render('index');
    });

});

router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;