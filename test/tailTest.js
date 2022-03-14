const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {
  it(
    'returns [2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, 3, 4, 5, 6, 7, 8, 9]',
    () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const expectedOutput = [2, 3, 4, 5, 6, 7, 8, 9];
      assert.deepEqual(tail(input), expectedOutput);
    });
    
  it(
    'returns [] for []',
    () => {
      const input = [[]];
      const expectedOutput = [];
      assert.deepEqual(tail(input), expectedOutput);
    });
  
  it(
    "returns ['am', 'the', 'Batman'] for ['I', 'am', 'the', 'Batman']",
    () => {
      const testArray3 = ['I', 'am', 'the', 'Batman'];
      assert.deepEqual(tail(testArray3), ['am', 'the', 'Batman']);
    });

});
