// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "burgers_db"
  });
};

// Makes the connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  console.log("Connected!");
  console.log("WOOOO! YEEEEEAAAAAH BABY! That's what I've been waiting for.");
});

// Export connection for our ORM to use.
module.exports = connection;