const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.get("/", function (req, res) {
  fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
      res.json({
        msg: "Error msg",
      });
    } else {
      res.json({
        msg: data,
      });
    }
  });
});

app.post("/add", function (req, res) {
  const todo = req.body.todo;
  console.log(todo);
  fs.appendFile("file.txt", todo, function (err) {
    if (err) throw err;
    res.json({
      msg: "Added",
    });
  });
});

app.delete("/", (req, res) => {
  fs.writeFile("file.txt", "", function (err) {
    if (err) throw err;
    res.json({
      msg: "Deleted",
    });
  });
});
app.listen(3000);
