const fs = require("fs");

const data = "writing this data to file";

fs.writeFile("a.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully written");
  }
});
