var name = require("./source").myName;
var print = require("./source").myPrint;

var source = require("./source");

console.log("Name is " + name);
print();

console.log("==================");

console.log("Name is " + source.myName);
source.myPrint();
