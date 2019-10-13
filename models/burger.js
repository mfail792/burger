var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);

        });

    },

    create: function (cols, vals, cb) {
        orm.create("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);

        });
    }
};



//exporting database methods for the controller
module.exports = burger;