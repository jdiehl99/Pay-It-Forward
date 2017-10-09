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

  var orm = {
      all: function(tableName, cb){
          
        var queryString = "SELECT * FROM " + tableName + ";"
        connection.query(queryString, function(err, result){
                if(err){
                    throw err;
                }
            cb(result);
        });
      }



      }

