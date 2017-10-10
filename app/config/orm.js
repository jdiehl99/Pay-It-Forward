var connection = require("../config/connection.js");

/** 
 * Helper function to get # of question marks for SQL syntax.
 * @param {number} num - vals.length.
 */
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// END printQuestionMarks ____

/** 
 * Helper function to convert object key/value pairs to SQL syntax.
 * @param {object} ob - objColVals. 
 */
function objToSql(ob) {
    var arr = [];


    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}
// END objToSql ____

// Select all from specified table in mysql.
var orm = {


    /** 
     * Returns all data from the table name passed.
     * @param {string} tableName - The table you want to select.
     * @param {function} cb - function(result).
     */
    all: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";"

        // mysql connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    /**
     * Insert new data into specified table.
     * @param {string} table - table name.
     * @param {string} cols - column names must be entered in an array []. 
     * @param {string} vals - new values must be entered in an array [].
     * @param {function} cb - function(result).
     */
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        // mysql connection
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    /**
     * Update data in specified table, please note add a space to the values in the obj.
     * @param {string} table - table name.
     * @param {obj} objColVals - object with column names as properties and then add space new values. 
     * @param {string} condition - EX var condition = "id = " + req.params.id.
     * @param {function} cb - function(result).
     */
    update: function (table, objColVals, condition, cb) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        // mysql connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    /**
     * Delete row from specified table.
     * @param {string} table - table name.
     * @param {number} id - id you want to delete. 
     * @param {function} cb - function(result).
     */
    delete: function (table, id, cb) {

        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += "id= ";
        queryString += id;

        // mysql connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    /**
     * Return all data from other tables that match the loan.
     * @param {function} cb - function(result).
     */
    matchingLoanData: function (cb) {

        var queryString = "SELECT d.first_name as donor_id, u.first_name as user_id, charity_name, l.id as loan_id";
        queryString += " FROM user_table as u";
        queryString += " INNER JOIN loans_table as l";
        queryString += " ON u.id = l.userid";
        queryString += " INNER JOIN donors_table as d";
        queryString += " ON l.donorid = d.id";
        queryString += " INNER JOIN charity_table as c";
        queryString += " ON l.charityid = c.id";

        // mysql connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    }
};



module.exports = orm;