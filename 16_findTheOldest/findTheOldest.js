const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();

  arr.map((person) => {
    person.yearOfDeath ??= person.yearOfDeath = currentYear;
  });

  return arr.reduce(
    (a, b) =>
      a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? a : b,
    -Infinity
  );
};

// Do not edit below this line
module.exports = findTheOldest;
