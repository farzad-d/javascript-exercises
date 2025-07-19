const repeatString = function (str, num) {
  let result = "";
  if (num < 0) {
    return "ERROR";
  } else {
    while (num) {
      result += str;
      num--;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
