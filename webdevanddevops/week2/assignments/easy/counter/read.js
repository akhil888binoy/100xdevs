const fs = require("fs");

fs.readFile("a.txt", "utf-8", print);

function print(err, data) {
  console.log(data);
}

let c = 0;
for (let i = 0; i < 1000; i++) {
  c += i;
}
