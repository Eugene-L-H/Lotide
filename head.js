const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const pass = '✅✅✅';
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    const fail = '⚠️⚠️⚠️';
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
 return arr === [] ?  undefined : arr[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5); // false
assertEqual(head([]), 5); // false
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // frue
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); // false