const request = require("request");
const fileSystem = require("fs");

request("https://www.google.ca/?gws_rd=ssl").pipe(
    fileSystem.createWriteStream("google_page.html"));
