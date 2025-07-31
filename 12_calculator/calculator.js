const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function (num, pow) {
  return num ** pow;
  // return Math.pow(num, pow);
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
