const sumAll = function (x, y) {
  let sum = 0;
  if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
    return "ERROR";
  } else {
    let min = Math.max(x, y);
    let max = Math.min(x, y);

    for (let i = max; i <= min; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
