const assert = require("assert");

const math = require("./math");

assert.equal(math.evenDoublerSync(2), 4);
assert.throws(function () {
  math.evenDoublerSync(3);
}, /Odd/);

math.evenDoubler(2, function (error, result) {
  assert.ifError(error);
  assert.equal(result, 4, "evenDoubler failed on a even number input");
});

math.evenDoubler(3, function (error, reuslt) {
  assert.notEqual(error, null,
      "evenDoubler fail to return an error for odd input");
});
