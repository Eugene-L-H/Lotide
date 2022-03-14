const eqArrays = require('./eqArrays');

const assertArrayEqual = (arr1, arr2) => {
  const equal = eqArrays(arr1, arr2);
  if (equal) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion PASS: [${arr1}] === [${arr2}]`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion FAIL: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArrayEqual;