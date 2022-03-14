const assert = require('chai').assert;
const middle = require('../middle.js');

describe('#middle', () => {
  it('', () => {
    assert.deepEqual(middle([1]), []);
  });
   
  it('', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
