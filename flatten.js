const flatten = (arr) => {
  let newArr = [];

  for (const item of arr) {
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      for (const subItem of item) {
        newArr.push(subItem);
      }
    }
  }
  return newArr;
};

module.exports = flatten;

// TEST CODE
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // PASS  