// node convention: error is the first parameter of callback functions

const maxTime = 1000;

const myCallback = function (error, message) {
  if (error !== undefined) {
    console.error("Fail: " + error.message);
  } else {
    console.log("Success: " + message);
  }
};

const evenNumberDoubler = function (number, callback) {
  var duration = Math.random() * maxTime;
  if (number % 2 === 0) {
    var result = (number * 2).toString();
    setTimeout(function () {
      callback(undefined, result);
    }, duration);
  } else {
    var error = new Error("It's an odd number!");
    setTimeout(function () {
      callback(error, "error");
    }, duration);
  }
};

for (var i = 0; i < 10; i++) {
  console.log("Doubling " + i);
  evenNumberDoubler(i, myCallback);
}

module.exports.evenDoubler = evenNumberDoubler;
