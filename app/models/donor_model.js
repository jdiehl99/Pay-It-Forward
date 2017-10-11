var orm = require("../config/orm.js")


var donor = {




    all: function (cb) {
        orm.all("donors_table", function (result) {
            cb(result)
        })
    },

    setDashboardId: function (email, cb) {

        orm.setDashboardId("donors_table", email, function (result) {
            cb(result);
        })

    },
    /**
     * @param {array} cols - first name, last name, email.
     * @param {array} vals - enter vals in array [].
     * @param {function} cb - function(result)
     */
    create: function (cols, vals, cb) {
        orm.create("donors_table", cols, vals, function (result) {
            cb(result);
        })
    },
    /**
     * @param {object} ObjColVals - object with column names as properties and then new values. 
     * @param {var} condition -  EX var condition = "id = " + req.params.id.
     * @param {function} cb - function(result)
     */
    update: function (objColVals, condition, cb) {

        orm.update("donors_table", objColVals, condition, function (result) {
            cb(result)
        })
    },

    /**
     * @param {number} id - id you want to delete.  
     */

    delete: function (id, cb) {
        orm.delete("donors_table", id, function (result) {
            cb(result)
        })


    },

    allIdInfo: function (id, cb) {
        orm.allIdInfo("donors_table", id, function(result){
            cb(result);
        })
    }


}

module.exports = donor;