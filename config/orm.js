/// Requirements and shiz, lets get that out of the way.
let maybe = false

let con = require('./connection.js');

// This is where the fun begins.
var orm = {
    selectAll: function (callback) {
        //This be mySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    
    //add a BORGER
    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?',
            {
                // BORGERS
                burger_name: burger_name,
                // Should allow user to change it's state later.
                devoured: false,
            }, function (err, result) {
                if (err) throw err;
                callback(result);
            });
    },
    // Move BORGER
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};

module.exports = orm;