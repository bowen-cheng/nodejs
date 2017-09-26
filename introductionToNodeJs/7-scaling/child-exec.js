const exec = require("child_process").exec;

const child = exec("uptime", function (err, stdout, stderr) {
  if (err) {
    console.log("Error: " + err);
    console.log("Error output: " + stderr);
  }
  else {
    console.log("Output: " + stdout)
  }
});

console.log("PID: " + child.pid);
