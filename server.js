const express = require("express");
const routes = require("./controllers/burgers_controller.js");
const exhandlbars = require("express-handlebars");

// For express
const app = express();


// Ports and whatnot
let PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// Parse request body as JSON string
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets the yummy Handlebars.
app.engine("handlebars", exhandlbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
app.use(routes);


// Sets the app to Listen
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
