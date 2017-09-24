const fs = require("fs");
const http = require("http");

const localFilePath = __dirname + "/test-file.txt";
const port = 8080;
const ip = "localhost";

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === "/get-file") {
    fs.createReadStream(localFilePath).pipe(response);
  } else {
    response.end("Hello from a Node server");
  }
}).listen(port, ip);

console.log("Server is now running at: " + ip + ":" + port);
