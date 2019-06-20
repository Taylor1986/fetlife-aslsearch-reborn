var db = require("./db");
module.exports = {
  /**
   * Handler for the main search form.
   */

  //id, col, key
  requestUpdate: function(id, input) {
    var data = [[]];
    data.push([]);

    //creates list of data to write away
    for (var key in input) {
      data[0].push(key);
      data[1].push(input[key]);
    }
    //UpdateToDB(data.user_id, toUpdate);

    // Create a column to edit in the prepared statement for every entry in array
    // Remove trailing spaces and comma
    var cols = "";
    var index, len;
    for (index = 0, len = data[0].length; index < len; ++index) {
      cols += data[0][index] + "=" + data[1][index] + ", ";
    }
    cols = cols.replace(/,\s*$/, "");

    var sql = "update UserData set " + cols + " where user_id =" + id;

    db.con.query(sql, function(err, result, fields) {
      if (err) {
        throw err;
        response.status(400).end("Error in database operation");
      }
    });

    // return the ID of the processed user
    return;
  },

  //id, col, key
  requestInsert: function(input) {
    var data = [[]];
    data.push([]);

    //creates list of data to write away
    for (var key in input) {
      data[0].push(key);
      data[1].push(input[key]);
    }
    //UpdateToDB(data.user_id, toUpdate);

    // Create a column to edit in the prepared statement for every entry in array
    // Remove trailing spaces and comma
    var cols = "";
    var vals = "";
    var index, len;
    for (index = 0, len = data[0].length; index < len; ++index) {
      cols += data[0][index] + ", ";
      vals += data[1][index] + ", ";
    }
    cols = cols.replace(/,\s*$/, "");
    vals = vals.replace(/,\s*$/, "");

    var sql = "INSERT IGNORE INTO UserData (" + cols + ") VALUE (" + vals + ")";

    db.con.query(sql, function(err, result, fields) {
      if (err) {
        throw err;
        response.status(400).end("Error in database operation");
      }
    });

    // return the ID of the processed user
    return;
  }
};
