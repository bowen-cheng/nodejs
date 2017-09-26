const assert = require("assert");

const evenDoubler = require("./../1-callback/callback").evenDoubler;
const evenDoublerSync = function (number) {
  if (number % 2) {
    throw (new Error("Odd input"));
  } else {
    return number * 2;
  }
};

assert.equal(evenDoublerSync(2), 4);
assert.throws(function () {
  evenDoublerSync(3);
}, /Odd/);

evenDoubler(2, function (error, result) {
  assert.ifError(error);
  assert.equal(result, 4, "evenDoubler failed on a even number input");
});

evenDoubler(3, function (error, reuslt) {
  assert.notEqual(error, null,
      "evenDoubler fail to return an error for odd input");
});
