//importing the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
}


module.exports = burger;
// //     },

//     create: function (cols, vals, cb) {
//         orm.create("burgers", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },

//     update: function (objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },

//     delete: function (condition, cb) {
//         orm.delete("burgers", condition, function (res) {
//             cb(res);

//         });
//     }
// };



// //exporting database methods for the controller
// module.exports = burger;