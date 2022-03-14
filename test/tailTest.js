const tail = require('../tail.js');
const assertArrayEqual = require('../assertArrayEqual.js');


const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArray2 = [[]];
const testArray3 = ['I', 'am', 'the', 'Batman'];

assertArrayEqual(tail(testArray1), [2, 3, 4, 5, 6, 7, 8, 9]);
assertArrayEqual(tail(testArray2), []);
assertArrayEqual(tail(testArray3), ['am', 'the', 'Batman']);