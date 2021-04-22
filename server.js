const express = require("express");
const routes = require("./controllers/burgers_controller.js");
const exhandlbars = require("express-handlebars");

// For express
const burgertime = express();

let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
burgertime.use(express.static("public"));
// Parse request body as JSON
burgertime.use(express.urlencoded({ extended: true }));
burgertime.use(express.json());

// Set Handlebars.
burgertime.engine("handlebars", exhandlbars({ defaultLayout: "main" }));
burgertime.set("view engine", "handlebars");


// Import routes and give the server access to them.
burgertime.use(routes);
burgertime.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
