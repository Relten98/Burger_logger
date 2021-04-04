// The all-important dependencies.
let express = require("express");

// HANDLEBARS
let exphbs = require("express-handlebars");

// Import routes and give the server access to them.
let router = require("./controllers/burgers_controller.js");

// Something like, uh, something that's good instead of express, like... Hamburger Time.
let hamburgertime = express();

// PORT SET UP
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
hamburgertime.use(express.static("public"));

// Parse request body as JSON
hamburgertime.use(express.urlencoded({ extended: true }));
hamburgertime.use(express.json());

// Sets up the ever important handlebars. Mine aren't pretty.
hamburgertime.engine("handlebars", exphbs({ defaultLayout: "main" }));
hamburgertime.set("view engine", "handlebars");

// The magic to officially get this server up and running.
hamburgertime.use(router);

// Gets the server to listen.
hamburgertime.listen(PORT, function () {
  console.log(`App now listening at https//localhost:${PORT}`);
});