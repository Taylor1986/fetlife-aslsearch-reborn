var libVERSAN = require("./libVERSAN.js");

module.exports = {
  /**
   * Handler for the main search form.
   */

  processSearchForm: function(form_object) {
    //Enable for verbose output of incomming GET data
    //console.log(Object.keys(form_object)[0]);
    //Verify if GET is right format
    if (
      libVERSAN.isObject(form_object) &&
      libVERSAN.isString(Object.keys(form_object)[0])
    ) {
      //Seperate needed data from GET, Decode to processable format and turn into SQL string
      var form_object = Object.keys(form_object)[0];
      try {
        var json = JSON.parse(decodeURIComponent(form_object));
        var response = buildSQLQuery(json);
        return response;
      } catch (e) {
        // Return null if error
        console.error(e);
        return;
      }
    }
    // Return null if format verification failed
    else {
      return;
    }
  },

  processSearchQuery: function(rawFields, rawResults) {
    var processed = arrayGen(rawFields, rawResults);
    return processed;
  }
};

function arrayGen(rawFields, rawResults) {
  var resultsArray = [[]];
  //fill first entry in array with colomn names
  Object.keys(rawFields).forEach(function(key) {
    // Do stuff with name
    resultsArray[0].push(rawFields[key].name);
  });

  var count = 1;
  Object.keys(rawResults).forEach(function(key) {
    // Do stuff with name
    resultsArray.push([]);

    resultsArray[0].forEach(function(element) {
      if (rawResults[key][element] != null) {
        resultsArray[count].push(rawResults[key][element]);
      } else {
        resultsArray[count].push("");
      }
    });
    count++;
  });
  return resultsArray;
}

/**
 * Creates SQL query from search form input.
 */
function buildSQLQuery(params) {
  // Format primary query
  var query =
    "select user_id, nickname, age, gender, role, friend_count, paid_account, location_locality, location_region, location_country, avatar_url, sexual_orientation, interest_level, looking_for, num_pics, num_vids FROM UserData where ";
    // Start with processing the cumulative roles/etc into the right format
    for (var x in params) {
    if (params[x]) {
      switch (true) {
        
        case /^user-sex[\d]{1,2}/.test(x):
          if (!params["user-sex"]) {
            params["user-sex"] = [];
          }
          params["user-sex"].push(params[x]);
          break;
        case /^user-sexual_orientation[\d]{1,2}/.test(x):
          if (!params["user-sexual_orientation"]) {
            params["user-sexual_orientation"] = [];
          }
          params["user-sexual_orientation"].push(params[x]);
          break;
        case /^user-role[\d]{1,2}/.test(x):
          if (!params["user-role"]) {
            params["user-role"] = [];
          }
          params["user-role"].push(params[x]);
          break;
        case /^user-activity_level[\d]{1,2}/.test(x):
          if (!params["user-activity_level"]) {
            params["user-activity_level"] = [];
          }
          params["user-activity_level"].push(params[x]);
          break;
        case /^user-looking_for[\d]{1,2}/.test(x):
          if (!params["user-looking_for"]) {
            params["user-looking_for"] = [];
          }
          params["user-looking_for"].push(params[x]);
          break;
      }
    }
  }

  // Process Indexed parameters first in the right order for indexing to hit
  // Always add an age. Query requires at least one paramater
  if (!params["min_age"]) {
    query += "age >= 18";
  } 
  // Else just use the given age
  else {
    params["min_age"] = libVERSAN.sanINT(params["min_age"]);
    query += "age >= " + params["min_age"];
  }
  if (params["max_age"]) {
    params["max_age"] = libVERSAN.sanINT(params["max_age"]);
    query += " and age <= " + params["max_age"];
  }
  if (params["user-sex"]) {
    query += " and (";
    for (var i in params["user-sex"]) {
      params["user-sex"][i] = libVERSAN.sanString(params["user-sex"][i]);
      query += "gender=" + params["user-sex"][i];
      if (i < params["user-sex"].length - 1) {
        query += " or ";
      }
    }
    query += ")";
  }
  if (params["user-role"]) {
    query += " and (";
    for (var i in params["user-role"]) {
      params["user-role"][i] = libVERSAN.sanString(params["user-role"][i]);
      query += "role=" + params["user-role"][i];
      if (i < params["user-role"].length - 1) {
        query += " or ";
      }
    }
    query += ")";
  }
  if (params["location_country"]) {
    params["location_country"] = libVERSAN.sanString(params["location_country"]);
    if (params["location_country"]) {
      query += " and location_country= " + params["location_country"];
    }
  }
  if (params["location_region"]) {
    params["location_region"] = libVERSAN.sanString(params["location_region"]);
    if (params["location_region"]) {
      query += " and location_region= " + params["location_region"];
    }
  }

  for (var x in params) {
    if (params[x]) {
      switch (x) {
        //Cases filter input from form, only accept known input options
        case "nickname(search)":
          if (params["nickname(operator)"] == "matches") {
            params[x] = libVERSAN.sanString(params[x]);
            query += " and nickname= " + params[x];
            break;
          } else {
            params[x] = "%" + params[x] + "%";
            params[x] = libVERSAN.sanString(params[x]);
            query += " and nickname " + " LIKE " + params[x];
            break;
          }
        case "user(bio)":
          if (params["user(bio)(operator])"] == "matches") {
            params[x] = libVERSAN.sanString(params[x]);
            query += " and bio= " + params[x];
            break;
          } else {
            params[x] = "%" + params[x] + "%";
            params[x] = libVERSAN.sanString(params[x]);
            query += " and bio " + " LIKE " + params[x];
            break;
          }
        case "user(websites)":
          if (params["user(websites)(operator)"] == "matches") {
            params[x] = libVERSAN.sanString(params[x]);
            query += " and websites= " + params[x];
            break;
          } else {
            params[x] = "%" + params[x] + "%";
            params[x] = libVERSAN.sanString(params[x]);
            query += " and websites " + " LIKE " + params[x];
            break;
          }
        case "user(fetishes_into)":
          if (params["user(fetishes_into)(operator)"] == "matches") {
            params[x] = libVERSAN.sanString(params[x]);
            query += " and fetishes_into= " + params[x];
            break;
          } else {
            params[x] = "%" + params[x] + "%";
            params[x] = libVERSAN.sanString(params[x]);
            query += " and fetishes_into " + " LIKE " + params[x];
            break;
          }
        case "user(fetishes_curious_about)":
          if (params["user(fetishes_curious_about)(operator)"] == "matches") {
            params[x] = libVERSAN.sanString(params[x]);
            query += " and fetishes_curious_about= " + params[x];
            break;
          } else {
            params[x] = "%" + params[x] + "%";
            params[x] = libVERSAN.sanString(params[x]);
            query += " and fetishes_curious_about " + " LIKE " + params[x];
            break;
          }
        case "friends(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query +=
            " and friend_count " +
            params["friend_count(operator)"] +
            " " +
            params[x];
          break;
        case "friends(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query += " and friend_count != 0";
          break;
        case "pictures(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query +=
            " and num_pics " + params["num_pics(operator)"] + " " + params[x];
          break;
        case "pictures(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query += " and num_pics != 0";
          break;
        case "videos(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query +=
            " and num_vids " + params["num_vids(operator)"] + " " + params[x];
          break;
        case "videos(count)":
          params[x] = libVERSAN.sanINT(params[x]);
          query += " and num_vids != 0";
          break;

        case "user-sexual_orientation":
          query += " and (";
          for (var i in params[x]) {
            params[x][i] = libVERSAN.sanString(params[x][i]);
            query += "sexual_orientation=" + params[x][i];
            if (i < params[x].length - 1) {
              query += " or ";
            }
          }
          query += ")";
          break;

        case "user-activity_level":
          query += " and (";
          for (var i in params[x]) {
            params[x][i] = libVERSAN.sanString(params[x][i]);
            query += "interest_level=" + params[x][i];
            if (i < params[x].length - 1) {
              query += " or ";
            }
          }
          query += ")";
          break;
        case "user-looking_for":
          query += " and (";
          for (var i in params[x]) {
            params[x][i] = libVERSAN.sanString(params[x][i]);
            query += "looking_for=" + params[x][i];
            if (i < params[x].length - 1) {
              query += " or ";
            }
          }
          query += ")";
          break;
        case "location_locality":
          params[x] = libVERSAN.sanString(params[x]);
          if (params[x]) {
            query += " and location_locality= " + params[x];
          }
          break;


        case "user(type)":
          if (params[x]) {
            params[x] = libVERSAN.sanBool(params[x]);
            if (params[x]) {
              query += " and paid_account=" + params[x];
            }
          }
          break;
        //        // TODO:
        //        case 'user(vanilla_relationships)':
        //          if (params[x]) {
        //            query += ' and P ' + params[x];
        //          }
        //          break;
      }
    }
  }
  // add results limit, users should refine searches, not request more results
  query += " LIMIT 500";
  return query;
}
