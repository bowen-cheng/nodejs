const fs = require("fs");

const content = "This file and its content is written using NodeJs!";
const testDir = "temp/";
const oldFile = "old-name.txt";
const newFile = "new-name.txt";
const newFilePath = testDir + newFile;

console.log("Checking if the directory 'temp exists'...");

// The "sync" suffix of the function names indicates they are synchronous
if (fs.existsSync(testDir)) {
  console.log("The directory 'temp' exists, cleaning up...");
  if (fs.existsSync(newFilePath)) {
    fs.unlinkSync(newFilePath);
  }
  fs.rmdirSync(testDir);
  console.log("The directory 'temp' and files in it are now removed");
} else {
  console.log("Making directory 'temp'...");
  fs.mkdirSync(testDir);
}

if (fs.existsSync(testDir)) {
  process.chdir(testDir);
  fs.writeFileSync(oldFile, content);
  fs.renameSync(oldFile, newFile);
  console.log("File size: " + fs.statSync(newFile).size + " bytes");
  console.log("File content: " + fs.readFileSync(newFile).toString());
}
