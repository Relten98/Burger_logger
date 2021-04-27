// Set up MySQL connection.
let mysql = require("mysql");
let connection;
// Main  connection
if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
     connection = mysql.createConnection({
        host: "localhost",
        port: 3306, // note-to-self: database will not connect with 3000
        user: "root",
        password: "password123",
        database: "burgers_db"
    });
}





// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
