// Set up MySQL connection.
let mysql = require("mysql");

// Main connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // note-to-self: database will not connect with 3000
    user: "root",
    password: "password123",
    database: "burgers_db"
});


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
