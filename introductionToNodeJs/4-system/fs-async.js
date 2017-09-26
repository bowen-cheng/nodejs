const fs = require("fs");

const content = "This file and its content is written using NodeJs!";
const testDir = "temp/";
const oldFile = "old-name.txt";
const newFile = "new-name.txt";
const newFilePath = testDir + newFile;

console.log("Cleaning up any residual files from previous runs...");
if (fs.existsSync(testDir)) {
  if (fs.existsSync(newFilePath)) {
    fs.unlinkSync(newFilePath);
  }
  fs.rmdirSync(testDir);
}
console.log("Clean up complete");

// These chained callback functions demonstrates the "Christmas tree problem",
// which should be avoided by using synchronous calls

fs.mkdir(testDir, function (err) {
  fs.exists(testDir, function (exists) {
    if (exists) {
      process.chdir(testDir);
      fs.writeFile(oldFile, content, function (err) {
        fs.rename(oldFile, newFile, function (err) {
          fs.stat(newFile, function (err, stats) {
            console.log("File size: " + stats.size + " bytes");
            fs.readFile(newFile, function (err, data) {
              console.log("File content: " + data.toString());
            })
          })
        })
      })
    }
  })
});
