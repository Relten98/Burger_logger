/// Requirements and shiz, lets get that out of the way.
let connection = require("../config/connection.js");

function convertSQL(ob) {
    // ARRRRRRRRAAAYYYY
    let array = [];


    for (let key in ob) {
        // Some very spicy, but confusing stuff that I am not sure if this is even going to work.
        // Stores object and key into a special value for easy future calls.
                let value = ob[key];

                // Call object if it has a unique property
        if (Object.hasOwnProperty.call(ob, key)) {


            // Splits values so that objects can be properly spaced out when it is printed.
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            array.push(key + "=" + value);
        }
    }

// Stores the array to a string to be showcased in the html
    return array.toString();

}

function printObjects(num) {
    // ARRRRRRRRRAYYY
    let array = [];

    // YO-HO-HO

    for (let i = 0; i < num; i++) {
        array.push("?");
    }

    // Pushes our array of information to a sting for display purposes.
    return array.toString();
}


// This is where the fun begins.
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Add a borger
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printObjects(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update borgers
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";

        // Our convert sql function called earlier.
        queryString += convertSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // Delete a borger :(
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Exports the information to be called elsewhere.
module.exports = orm;