// Imports the required information.
let borger = require('./models/burger.js');

let express = require('express');

const express.router();
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