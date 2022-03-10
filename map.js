const eqArrays = (arr1, arr2) => {
  // If parameters are of different length return false
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // If any value in arr1 does not match the value at the same index in arr2
    // return false
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const equal = eqArrays(arr1, arr2);
  if (equal) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion PASS: [${arr1}] === [${arr2}]`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion FAIL: [${arr1}] !== [${arr2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// TEST CODE
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);

const nums = [1, 2, 3, 4, 5, 6, 7];
const results3 = map(nums, num => num * 2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(results3, [2, 4, 6, 8, 10, 12, 14]);