var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    insecureAuth : true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log("WOOOO! YEEEEEAAAAAH BABY That's what I've been waiting for.");
  });

  module.exports;