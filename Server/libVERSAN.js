/**
 * This Library is for VERifying and SANitizing user input
 * It does include some unused functions for future use
 */

var mysql = require("mysql");
module.exports = {
  // Returns if a value is a string
  isString: function(value) {
    return typeof value === "string" || value instanceof String;
  },
  // Returns if a value is a number
  isNumber: function(value) {
    return typeof value === "number" && isFinite(value);
  },
  // Returns if a value is a function
  isFunction: function(value) {
    return typeof value === "function";
  },
  // Returns if a value is an object
  isObject: function(value) {
    return value && typeof value === "object" && value.constructor === Object;
  },
  // Returns if a value is null
  isNull: function(value) {
    return value === null;
  },

  // Returns if a value is undefined
  isUndefined: function(value) {
    return typeof value === "undefined";
  },
  // Returns if a value is a boolean
  isBoolean: function(value) {
    return typeof value === "boolean";
  },
  // Returns if a value is a regexp
  isRegExp: function(value) {
    return value && typeof value === "object" && value.constructor === RegExp;
  },
  // Returns if value is an error object
  isError: function(value) {
    return value instanceof Error && typeof value.message !== "undefined";
  },
  // Returns if value is a date object
  isDate: function(value) {
    return value instanceof Date;
  },
  // Returns if a Symbol
  isSymbol: function(value) {
    return typeof value === "symbol";
  },
  sanString: function(string) {
    string = string.toString();
    string = mysql.escape(string);
    return string;
  },
  sanINT: function(INT) {
    INT = parseInt(INT);
    INT = mysql.escape(INT);
    return INT;
  },
  sanBool: function(bool) {
    //transform true/false or 1/0 to boolean
    if (bool == 1) {
      bool = true;
    } else if (bool == 0) {
      bool = false;
    } else if (bool == "true" || bool == "True" || bool == "TRUE") {
      bool = true;
    } else if (bool == "false" || bool == "False" || bool == "FALSE") {
      bool = false;
    }
    if (typeof bool === "boolean") {
      bool = mysql.escape(bool);
      return bool;
    } 
      console.log("WARNING: Expected boolean value in " + bool);
      return null;
    
  },

  // Input validation script for scraper
  validateInput: function(obj) {
    var safe_obj = {};

    for (var k in obj) {
      switch (k) {
        case "user_id":
          // Make sure this is an int and sql safe
          safe_obj[k] = parseInt(obj[k]);
          obj[k] = mysql.escape(obj[k]);
          break;
        case "age":
          // Make sure this is an int and sql safe
          safe_obj[k] = parseInt(obj[k]);
          obj[k] = mysql.escape(obj[k]);
          break;
        case "friend_count":
          // Make sure this is an int and sql safe
          safe_obj[k] = parseInt(obj[k]);
          obj[k] = mysql.escape(obj[k]);
          break;
        case "num_pics":
        // Make sure this is an int and sql safe
          safe_obj[k] = parseInt(obj[k]);
          obj[k] = mysql.escape(obj[k]);
          break;
        case "num_vids":
        // Make sure this is an int and sql safe
          safe_obj[k] = parseInt(obj[k]);
          obj[k] = mysql.escape(obj[k]);
          break;
        case "paid_account":
        // Make sure this is an boolean and sql safe
            if (!typeof bool === "boolean") {
              if (obj[k] == 1) {
                obj[k] = true;
              } else if (obj[k] == 0) {
                obj[k] = false;
              } else if (obj[k] == "true" || obj[k] == "True") {
                obj[k] = true;
              } else if (obj[k] == "false" || obj[k] == "False") {
                obj[k] = false;
              }
            }
              if (typeof obj[k] === "boolean") {
                safe_obj[k] = mysql.escape(obj[k]);
              } 
              else{
                console.log("WARNING: Expected boolean value in " + obj[k]);
              }
                
          break;
        // TODO:
        // Verify if a website is a website
        // Verify if countries exist
        // Verify if urls are urls
        default:
          // If != a used key, drop it somewhere around here or before switch
          //
          obj[k] = obj[k].toString();
          obj[k] = mysql.escape(obj[k]);
          safe_obj[k] = obj[k];

          //  }
          break;
      }
    }
    // send back the cleaned object
    return safe_obj;
  }
};
