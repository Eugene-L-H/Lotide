const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  return arr === [] ?  undefined : arr.slice(1);
};

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

assertEqual(1, tail([1, 2, 3]));
assertEqual(tail(testArray), [2, 3, 4 , 5, 6, 7, 8, 9]);
console.log(testArray);