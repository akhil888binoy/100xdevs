const express = require("express");
const app = express();

function logger(req, res, next) {
  console.log("Method" + req.method);
  console.log("URL" + req.url);
  console.log(new Date());
  next();
}

let count = 0;
function requestCount(req, res, next) {
  count += 1;
  next();
}

app.use(logger);
app.use(requestCount);

app.get("/count", (req, res) => {
  res.json({
    count: count,
  });
});
app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const multiply = a * b;
  res.json({
    multiply: multiply,
  });
});

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const add = a + b;
  res.json({
    add: add,
  });
});
app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const divide = a / b;
  res.json({
    divide: divide,
  });
});
app.get("/subtract", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const subtract = a - b;
  res.json({
    subtract: subtract,
  });
});

app.listen(3000);
