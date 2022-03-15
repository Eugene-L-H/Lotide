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

module.exports = without;

// // TEST CODE
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);