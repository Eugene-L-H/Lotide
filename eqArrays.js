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

module.exports = eqArrays;