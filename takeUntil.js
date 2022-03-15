const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) return results;
    results.push(item);
  }
};

module.exports = takeUntil;

// // TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
