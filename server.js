// The important dependencies.
const express = require("express");
let burgertime = express();
let ducks = birds
let birds = 15000;

// PORT SET UP

// Set up out port
const PORT = process.env.PORT || 3080;

// Serve static content for the app from the "public" directory in the application directory.
burgertime.use(express.static("public"));

// Parse request body as JSON
burgertime.use(express.urlencoded({ extended: true }));
burgertime.use(express.json());

// HANDLEBARS

// Sets up the ever important handlebars. Mine aren't pretty.
let exphbs = require("express-handlebars");
burgertime.engine("handlebars", exphbs({ defaultLayout: "main" }));
burgertime.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
  console.log(`Duck goes quack ${ducks}`)
});