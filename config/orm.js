var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, cols, vals, cb) {

    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, cols[0], cols[1], vals[0], vals[1]], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(tableInput, col1, val1, id, cb) {
    var queryString =
      "UPDATE ?? set ?? = ? where id = ?";

    connection.query(
      queryString, [tableInput, col1, val1, id], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  },
  deleteOne: function(tableInput, id, cb) {
    var queryString =
      "DELETE from ?? where id = ?";

    connection.query(
      queryString, [tableInput, id], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  }
};

module.exports = orm;