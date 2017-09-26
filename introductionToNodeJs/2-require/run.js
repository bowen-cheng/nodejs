const name = require("./source").myName;
const print = require("./source").myPrint;

const source = require("./source");

console.log("Name is " + name);
print();

console.log("==================");

console.log("Name is " + source.myName);
source.myPrint();
