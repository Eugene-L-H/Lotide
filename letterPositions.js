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

module.exports = letterPositions;
// TEST CODE
// const testVar = letterPositions('hello');

// assertArraysEqual(testVar['h'], [0]);
// assertArraysEqual(testVar['e'], [1]);
// assertArraysEqual(testVar['l'], [2, 3]);
// assertArraysEqual(testVar['o'], [4]);
