const fs = require("fs");
const http = require("http");

const localFilePath = __dirname + "file.text";
var port = "unknown";
var ip = "unknown";

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === "/get-file") {
    fs.createReadStream(localFilePath).pipe(response);
  } else {
    response.end("Hello from a Node server");
  }
  ip = process.env.IP;
  port = process.env.PORT;
}).listen(process.env.PORT, process.env.IP);

console.log("Server is now running at: " + ip + ":" + port);
