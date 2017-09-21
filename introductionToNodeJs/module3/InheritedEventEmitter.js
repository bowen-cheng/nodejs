var EventEmitter = require("events").EventEmitter;
var util = require("util");

var resource = function (numOfLoops) {

  var count = 0;
  var self = this;
  self.emit("start");

  process.nextTick(function () {
    var interval = setInterval(function () {
      self.emit("data", ++count);
      if (count === numOfLoops) {
        self.emit("end");
        clearInterval(interval);
      }
    }, 10)
  });
};

module.exports = resource;
util.inherits(resource, EventEmitter);

var myEmitter = new resource(10);

myEmitter.on("start", function () {
  console.log("Event emitter is started");
});

myEmitter.on("data", function (data) {
  console.log("Data received: " + data);
});

myEmitter.on("end", function (data) {
  console.log("All data are retrieved. Total: " + data);
});
