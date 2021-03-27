// Set up express
let express = require("express");

/*
// Just in case...
let connection = require("../config/connection.js");
var orm = require('../config/orm.js');
*/

// Router
let router = express.Router();

// Imports the model BORGER (burger.js)
let borger = require('../models/burger.js');


// And now for the routers
router.get('/', function (req, res) {
    res.redirect
});

router.get('/index', function (req, res) {
    borger.selectall(function (data) {
        res.render('index');
    });

});

router.post('/burger/create', function (req, res) {
    borger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});
router.post('/burger/eat/:id', function (req, res) {
    borger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;