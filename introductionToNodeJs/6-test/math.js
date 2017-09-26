const maxTime = 1000;

const evenDoubler = function (number, callback) {
  var duration = Math.random() * maxTime;
  if (number % 2 === 0) {
    var result = (number * 2);
    setTimeout(function () {
      callback(undefined, result);
    }, duration);
  } else {
    var error = new Error("It's an odd number!");
    setTimeout(function () {
      callback(error);
    }, duration);
  }
};

const evenDoublerSync = function (number) {
  if (number % 2) {
    throw (new Error("Odd input"));
  } else {
    return number * 2;
  }
};

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;
