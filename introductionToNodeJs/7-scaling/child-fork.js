const fork = require("child_process").fork;

const child = fork(__dirname + "/honorStudent.js");

child.on("message", function (message) {
  console.log("The answer is: " + message.answer);
  child.send({cmd: "done"});
});

child.send({cmd: "double", number: 20});
