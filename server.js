// The all-important dependencies.
let express = require("express");
// Something like, uh, something that's good instead of express, like... Hamburger Time.
let hamburgertime = express();

// PORT SET UP
let PORT = process.env.PORT || 3080;

// Serve static content for the app from the "public" directory in the application directory.
hamburgertime.use(express.static("public"));

// Parse request body as JSON
hamburgertime.use(express.urlencoded({ extended: true }));
hamburgertime.use(express.json());

// HANDLEBARS

// I forget that you needed to install handlebars OOPS
let exphbs = require("express-handlebars");

// Sets up the ever important handlebars. Mine aren't pretty.
hamburgertime.engine("handlebars", exphbs({ defaultLayout: "main" }));
hamburgertime.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
// ^ Why did this one work, but not the.... You know what, I am not going to question it. 

// The magic to officially get this server up and running.
hamburgertime.use(routes);

hamburgertime.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});