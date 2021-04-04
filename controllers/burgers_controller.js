// Set up express
let express = require("express");

// Router
let router = express.Router();

// Imports the model BORGER (burger.js)
let borger = require('../models/burger.js');

router.get("/", function (req, res) {
  borger.all(function (data) {
    var hbsObject = {
      borger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/borger", function (req, res) {
  borger.create([
    "name", "devoured"
  ], [
      req.body.name, req.body.devoured
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/borger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  borger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/borger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  borger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
  
  // Export routes for server.js to use.
  module.exports = router;