// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const count = {};
  const results = {};

  for (const item of allItems) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

  for (let key in itemsToCount) {
    let name = key;
    if (itemsToCount[name]) {
      results[name] = count[name];
    }
  }
  console.log('count obj = ', count);
  console.log('results obj = ', results);
  return results;
};

module.exports = countOnly;
// TEST CODE
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);