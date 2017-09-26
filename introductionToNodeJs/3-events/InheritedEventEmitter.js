const EventEmitter = require("events").EventEmitter;
const util = require("util");

const resource = function (numOfLoops) {

  var count = 0;
  const self = this;
  self.emit("start");

  process.nextTick(function () {
    const interval = setInterval(function () {
      self.emit("data", ++count);
      if (count === numOfLoops) {
        self.emit("end", numOfLoops);
        clearInterval(interval);
      }
    }, 10)
  });
};

module.exports = resource;
util.inherits(resource, EventEmitter);

const myEmitter = new resource(10);

myEmitter.on("start", function () {
  console.log("Event emitter is started");
});

myEmitter.on("data", function (data) {
  console.log("Data received: " + data);
});

myEmitter.on("end", function (data) {
  console.log("All data are retrieved. Total: " + data);
});
