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
}

// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

