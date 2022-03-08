const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  // If parameters are of different length return false
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // If any value in arr1 does not match the value at the same index in arr2
    // return false
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); // => should FAIL