var orm = require("../config/orm.js")



var user = {

    /** 
     * Returns all data from the user.
     * @param {function} cb - function(result).
     */
    all: function (cb) {
        orm.all("user_table", function (result) {

            cb(result)
        })
    },

    setDashboardId: function (email, cb) {

      orm.setDashboardId("user_table", email, function(result){
          cb(result);
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
     * Update data in specified table, please note add a space to the values in the obj.
     * @param {obj} objColVals - object with column names as properties and then add space new values. 
     * @param {string} condition - EX var condition = "id = " + req.params.id.
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

    getLoanAmount : function(lowNum, highNum , cb){
        orm.getLoanAmount("user_table", lowNum, highNum, function(result){

            cb(result);
        })
    },

    allIdInfo: function (id, cb) {
        orm.allIdInfo("user_table", id, function(result){
            cb(result);
        })
    }, 

    rand: function(randNum, cb){
        orm:rand("user_table", randNum, function(result){
            cb(result);
        });
    }


}

module.exports = user;