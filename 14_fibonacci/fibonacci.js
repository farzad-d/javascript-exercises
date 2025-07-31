const fibonacci = function (num) {
  if (num == 0) return 0;
  if (num < 0) return "OOPS";

  let x = 1;
  let y = 0;

  for (let i = 1; i < num; i++) {
    let z = x + y;
    y = x;
    x = z;
  }

  return x;
};

// Do not edit below this line
module.exports = fibonacci;
