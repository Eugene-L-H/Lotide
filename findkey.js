// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion PASS: ${actual} === ${expected}`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion FAIL: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) return key;
  }
};

// TEST CODE
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const results2 = findKey({ 'one': 1, 'two': 2 }, x => x === 1);
const results3 = findKey(
  { 'Jack': 'Pumpkin King', 'Geralt': 'Witcher' },
  x => x === 'Witcher'
);

assertEqual(results1, 'noma');
assertEqual(results2, 'one');
assertEqual(results3, 'Geralt');

