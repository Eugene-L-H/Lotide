const tail = require('../tail.js');
const assertEqual = require('../assertArraysEqual.js');


const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArray2 = [];
const testArray3 = ['I', 'am', 'the', 'Batman'];

assertEqual(tail(testArray1), [2, 3, 4, 5, 6, 7, 8, 9]);
assertEqual(tail(testArray2), undefined);
assertEqual(tail(testArray3), ['am', 'the', 'Batman']);