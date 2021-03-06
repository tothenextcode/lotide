const assert = require('chai').assert;
const tail = require('../lib/tail');

describe('#tail', function() {
  it("should return ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", function() {
    const words = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  
  it("should not remove elements from array", function() {
    const words = ['Hello', 'Lighthouse', 'Labs'];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("should return [] if array is empty", function() {
    const words = [];
    assert.strictEqual(tail(words).length, 0);
  });
});