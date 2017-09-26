var math = require("./../6-test/math");

process.on("message", function (message) {
  if (message.cmd === "double") {
    console.log("Student: I was asked to double " + message.number);
    math.evenDoubler(message.number, function (error, result) {
      process.send({answer: result});
    })
  } else if (message.cmd === "done") {
    process.exit();
  }
});
