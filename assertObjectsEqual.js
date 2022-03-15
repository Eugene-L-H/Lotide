const eqArrays = (arr1, arr2) => {
  // If parameters are of different length return false
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // If any value in arr1 does not match the value at the same index in arr2
    // return false
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If objects have differing number of keys
  if (keys.length !== keys2.length) return false;
  for (const key of keys) {

    // If value of key is an array
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // if value of key is a primitive
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const equal = eqObjects(actual, expected);

  if (equal) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion PASS: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion FAIL: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = eqArrays;
module.exports = eqObjects;
module.exports = assertObjectsEqual;

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(ab, ba); // PASS
// assertObjectsEqual(ab, abc); // FAIL
// assertObjectsEqual(cd, dc); // PASS
// assertObjectsEqual(cd, cd2); // FAIL
// assertObjectsEqual(cd, cd); // PASS
