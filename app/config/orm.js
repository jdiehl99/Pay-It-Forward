var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// END printQuestionMarks ____

// Helper function to convert object key/value pairs to SQL syntax
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

    //Insert new data into specified table.
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

    // Update data in specified table 
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

    // Delete row from specified table.
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

    //Return all data from other tables that match the loan. 
    matchingLoanData: function (cb) {

        var queryString = "SELECT donor_name, first_name, charity_name, loanid";
        queryString += " FROM user_table as a";
        queryString += " INNER JOIN loans_table as b";
        queryString += " ON a.id = b.userid";
        queryString += " INNER JOIN donors_table as c";
        queryString += " ON b.donorid = c.id";
        queryString += " INNER JOIN charity_table as d";
        queryString += " ON b.charityid = d.id";

        // mysql connection
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    }
};