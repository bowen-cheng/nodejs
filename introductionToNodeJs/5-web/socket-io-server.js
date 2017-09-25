const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const mainPage = __dirname + "/index.html";

const requestHandler = function (request, response) {
  fs.readFile(mainPage, function (error, data) {
    if (error) {
      response.writeHead(500);
      return response.end("Error loading the main page");
    } else {
      response.writeHead(200);
      response.end(data);
    }
  });
};

const app = http.createServer(requestHandler);
const io = socketIo.listen(app);

io.sockets.on("connection", function (socket) {
  setInterval(function () {
    var timestamp = Date.now();
    socket.emit("timer", timestamp);
    console.log("Emitted:" + timestamp);
  }, 4000);
  socket.on("submit", function (data) {
    console.log("Data submitted: " + data);
  });
});

app.listen(8080);
console.log("Server is now running");
