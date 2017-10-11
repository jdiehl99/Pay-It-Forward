var orm = require("../config/orm.js")



var loans = {

    /** 
     * Returns all data from the user.
     * @param {function} cb - function(result).
     */
    all: function (cb) {
        orm.all("loans_table", function (result) {

            cb(result)
        })
    },

    setDashboardId: function (email, cb) {

        orm.setDashboardId("loans_table", email, function (result) {
            cb(result);
        })

    },
    /**
     * @param {array} cols - first name, last name , email.
     * @param {array} vals - enter vals in array [].
     * @param {function} cb - function(result).
     */
    create: function (cols, vals, cb) {
        orm.create("loans_table", cols, vals, function (result) {
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

        orm.update("loans_table", objColVals, condition, function (results) {
            cb(results);
        });
    },

    /**
     * @param {number} id - id you want to delete.
     * @param {function} cb - function(result).
     */
    delete: function (id, cb) {

        orm.delete("loans_table", id, function (result) {
            cb(result);
        });
    },

    /** Return all data from other tables that match the loan.
     * @param {function} cb - function(result).
     */
    matchingLoanData: function (cb) {
        orm.matchingLoanData(function (result) {
            cb(result);
        })
    }

}

module.exports = loans;