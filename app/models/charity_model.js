var orm = require("../config/orm.js")



var charity = {

    /** 
     * Returns all data from the user.
     * @param {function} cb - function(result).
     */
    all: function (cb) {
        orm.all("charity_table", function (result) {

            cb(result)
        })
    },
    /**
     * @param {array} cols - first name, last name , email.
     * @param {array} vals - enter vals in array [].
     * @param {function} cb - function(result).
     */
    create: function (cols, vals, cb) {
        orm.create("charity_table", cols, vals, function (result) {
            cb(result);
        })
    },

   /**
     * Update data in specified table, please note add a space to the values in the obj.
     * @param {obj} objColVals - object with column names as properties and then add space new values. 
     * @param {string} condition - EX var condition = "id = " + req.params.id.
     * @param {function} cb - function(result).
     */
    update: function (objColVals, condition, cb) {

        orm.update("charity_table", objColVals, condition, function (results) {
            cb(results);
        });
    },

    /**
     * @param {number} id - id you want to delete.
     * @param {function} cb - function(result).
     */
    delete: function (id, cb) {

        orm.delete("charity_table", id, function (result) {
            cb(result);
        });
    },

}

module.exports = charity;