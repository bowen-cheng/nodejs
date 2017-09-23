// process.stdin stream starts paused, it must be resumed first
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdout.write("process.stdin now listening for inputs...\n");
process.stdout.write("process.id: " + process.pid + "\n");

process.stdin.on("data", function (data) {
  process.stdout.write("Data received: " + data);
});

process.stdin.on("end", function () {
  process.stderr.write("End of the input!\n");
});

// Listens to termination signal
// Kill by executing kill -TERM <process.id>
process.on("SIGTERM", function () {
  process.stderr.write("Termination signal for this process is received!\n");
  process.stderr.write("The process will now be terminated...\n");
  process.exit(0)
});
