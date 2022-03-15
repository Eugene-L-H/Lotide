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

module.exports = countLetters;
// TEST CODE
// const letters = countLetters('LHL');
// assertEqual(letters['L'], 2);
// assertEqual(letters['H'], 1);