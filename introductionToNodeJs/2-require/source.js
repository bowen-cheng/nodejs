const name = "Bill";

const print = function () {
  console.log("This message is printed from print function")
};

module.exports.myName = name;
module.exports.myPrint = print;
