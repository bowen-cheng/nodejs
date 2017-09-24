const http = require("http");

const options = {
  host: "www.google.com",
  port: 80,
  path: "/",
  method: "get"
};

console.log("Creating a HTTP.get request to 'Google.com'...");

// var request = http.request(options, function (response) {
http.get(options, function (response) {
  console.log("Response code: " + response.statusCode);
  response.pipe(process.stdout);
});

// request.end();
