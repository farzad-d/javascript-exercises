const palindromes = function (str) {
  let originalStr = str.toLowerCase().split("");
  let cleanedStr = [];
  let reversedStr = [];

  for (let i = 0; i < originalStr.length; i++) {
    if (
      (originalStr[i] >= "a" && originalStr[i] <= "z") ||
      (originalStr[i] >= "0" && originalStr[i] <= "9")
    ) {
      cleanedStr.push(originalStr[i]);
      reversedStr.unshift(originalStr[i]);
    }
  }

  return cleanedStr.every((val, i) => val === reversedStr[i]);
};

// Do not edit below this line
module.exports = palindromes;
