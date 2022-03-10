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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  console.log(results);
  return results;
};

// TEST CODE
const testVar = letterPositions('hello');

assertArraysEqual(testVar['h'], [0]);
assertArraysEqual(testVar['e'], [1]);
assertArraysEqual(testVar['l'], [2, 3]);
assertArraysEqual(testVar['o'], [4]);
