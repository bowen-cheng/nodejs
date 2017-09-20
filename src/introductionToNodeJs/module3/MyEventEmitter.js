var EventEmitter = require("events").EventEmitter;

var getResourceEmitter = function (numOfLoops) {

  var emitter = new EventEmitter();

  process.nextTick(function () {
    var count = 0;
    emitter.emit("start");
    // Execute the anonymous function every 10 milli seconds
    var timeout = setInterval(function () {
      emitter.emit("data", ++count);
      if (count === numOfLoops) {
        emitter.emit("end", count);
        //Stop triggering the anonymous function by clear the interval
        clearInterval(timeout);
      }
    }, 10)
  });
  return emitter;
};

var resource = getResourceEmitter(8);

resource.on("start", function () {
  console.log("Event emitter is started");
});

resource.on("data", function (data) {
  console.log("Data received: " + data);
});

resource.on("end", function (data) {
  console.log("All data are retrieved. Total: " + data);
});
