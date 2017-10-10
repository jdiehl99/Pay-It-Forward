var orm = require("../config/orm.js")



var user = {

    all: function (cb) {
        orm.all("user_table", function (result) {

            cb(result)
        })
    },
    /**
     * @param {array} cols - first name, last name , email.
     * @param {array} vals - enter vals in array [].
     * @param {function} cb - function(result).
     */
    create: function (cols, vals, cb) {
        orm.create("user_table", cols, vals, function (result) {
            cb(result);
        })
    },

    /**
     * @param {Object} objColVals - object with columns as properties.
     * @param {variable} condition - var condition = "id = " + req.params.id.
     * @param {function} cb - function(result).
     */
    update: function (objColVals, condition, cb) {

        orm.update("user_table", objColVals, condition, function (results) {
            cb(results);
        });
    },

    /**
     * @param {number} id - id you want to delete.
     * @param {function} cb - function(result).
     */
    delete: function (id, cb) {

        orm.delete("user_table", id, function (result) {
            cb(result);
        });
    },

}

module.exports = user;