// import orm.js into burger.js
var orm = require('../config/orm.js');

//call ORM functions
let borger = {
    
    all: function (cb) {
        orm.all("borger", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("borger", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("borger", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("borger", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = borger;