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

const without = (source, itemsToRemove) => {
  // Creat clone of source array
  let sourceClone = [];
  for (const item of source) {
    sourceClone.push(item);
  }

  let toRemoveIndexes = [];
  // indicies of the source array
  for (let i = 0; i < source.length; i++) {

    // Compare with indicies of the itemsToRemove array
    for (let j = 0; j < itemsToRemove.length; j++) {
      // Push the matched index from the source array to sourceClone array
      if (source[i] === itemsToRemove[j]) toRemoveIndexes.push(i);
    }
  }

  for (const index of toRemoveIndexes) {
    sourceClone.splice(index, 1);
  }
  return sourceClone;
};

// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);