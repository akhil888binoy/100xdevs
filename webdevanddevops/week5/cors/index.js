const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());



app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  const sum = a + b;
  res.json({
    sum: sum,
  });
});

app.listen(3000);
