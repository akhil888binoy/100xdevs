const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendTheFinalValueHere(data);
  });
}

function readFile(fileName) {
  return new Promise(readTheFile);
}
const p = readFile();

p.then(callback);

function callback(contents) {
  console.log(contents);
}

// console.log("hi hello");

// function timeout() {
//   console.log("Click the button");
// }

// setTimeout(timeout, 1000);
// console.log("welcome");

// let c = 0;
// for (let i = 0; i < 10000; i++) {
//   c = c + i;
// }
// console.log("expensive operation");
