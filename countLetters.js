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

const countLetters = (string) => {
  const result = {};
  for (const char of string) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  console.log('result ', result);
  return result;
};

// TEST CODE
const letters = countLetters('LHL');
assertEqual(letters['L'], 2);
assertEqual(letters['H'], 1);