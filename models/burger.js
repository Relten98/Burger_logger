// Imports the ORM
let orm = require('../config/orm.js');

// I hope this works....
// this be the model
let borger = {
    selectAll: function (callback) {
        orm.selectAll(function (results) {
            callback(results);
        });
    },

    insertOne: function (burger_name, callback) {
        orm.selectAll(burger_name, function (results) {
            callback(results);
        });
    },

    updateOne: function (burger_id, callback) {
        orm.selectAll(burger_id, function (results) {
            callback(results);
        });
    }
}

// Neatly exports everything.
module.exports = borger; 