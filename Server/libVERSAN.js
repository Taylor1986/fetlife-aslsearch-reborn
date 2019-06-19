/**
 * This Library is for VERifying and SANitizing user input
 * It does include some unused functions for future use
 */

var mysql = require('mysql');
module.exports = {
    // Returns if a value is a string
    isString: function  (value) {
    return typeof value === 'string' || value instanceof String;
    },
     // Returns if a value is a number
    isNumber: function  (value) {
     return typeof value === 'number' && isFinite(value);
     },
    // Returns if a value is a function
     isFunction: function  (value) {
     return typeof value === 'function';
     },
     // Returns if a value is an object
    isObject: function  (value) {
     return value && typeof value === 'object' && value.constructor === Object;
     },
     // Returns if a value is null
     isNull: function  (value) {
    return value === null;
    },
    
    // Returns if a value is undefined
    isUndefined: function  (value) {
    return typeof value === 'undefined';
    },
    // Returns if a value is a boolean
    isBoolean:  function (value) {
    return typeof value === 'boolean';
    },
    // Returns if a value is a regexp
    isRegExp: function  (value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
    },
    // Returns if value is an error object
    isError: function  (value) {
    return value instanceof Error && typeof value.message !== 'undefined';
    },
    // Returns if value is a date object
    isDate: function  (value) {
    return value instanceof Date;
    },
    // Returns if a Symbol
    isSymbol: function  (value) {
    return typeof value === 'symbol';
    },
    sanString: function(string){
        string = string.toString()
        string= mysql.escape(string);
        return string
    },
    sanINT: function(INT){
        INT = parseInt(INT);
        INT = mysql.escape(INT);
        return INT
    },
    sanBoolean: function(bool){
      //transform true/false or 1/0 to boolean
      if(bool == 1){
        bool = true;
      }
      else if (bool == 0){
        bool = false;
      }
      else if(bool == "true" || "True"){
        bool = true;
      }
      else if(vool == "false" || "False")
      {
        bool = false;
      }


      if (typeof value === 'boolean') {
        bool = mysql.escape(bool);
        return bool
      } else {
        console.log('WARNING: Expected boolean value in ' + bool);
        return null
      }
  },

    validateInput: function (obj) {
        var safe_obj = {};
        
        for (var k in obj) {
          switch (k) {
            case 'user_id':
                safe_obj[k] = parseInt(obj[k]);
                obj[k]=mysql.escape(obj[k]);
                break;
            case 'age':
                safe_obj[k] = parseInt(obj[k]);
                obj[k]=mysql.escape(obj[k]);
                break;
            case 'friend_count':
                safe_obj[k] = parseInt(obj[k]);
                obj[k]=mysql.escape(obj[k]);
                break;
            case 'num_pics':
                safe_obj[k] = parseInt(obj[k]);
                obj[k]=mysql.escape(obj[k]);
                break;
            case 'num_vids':
              safe_obj[k] = parseInt(obj[k]);
              obj[k]=mysql.escape(obj[k]);
              break;
            case 'paid_account':
              obj[k] = sanBoolean(obj[k]);
              if (obj[k] != null) {
                safe_obj[k] = obj[k];
              } else {
                console.log('WARNING: Expected boolean value in ' + obj[k]);
              }
              break;
            case 'avatar_url':
              if (obj[k].match(/^https:\/\/pic[0-9]*\.fetlife\.com/)) {
                obj[k]=mysql.escape(obj[k]);
                safe_obj[k] = obj[k];
              }
              break;
            default:
              // If != a used key, drop it somewhere around here or before switch
              //
              obj[k] = obj[k].toString()
              obj[k]=mysql.escape(obj[k]);
              safe_obj[k] = obj[k];
               
            //  }
              break;
          }
        }
        return safe_obj;
      }
};