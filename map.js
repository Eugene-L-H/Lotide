const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const results3 = map(nums, num => num * 2);

// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
// assertArraysEqual(results3, [2, 4, 6, 8, 10, 12, 14]);