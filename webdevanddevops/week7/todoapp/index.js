const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");
const app = express();

const JWT_SECRET = "akhilbinoy";
app.use(express.json());

function auth(req, res, next) {
  const token = req.headers.token;
  const verifiedToken = jwt.verify(token, JWT_SECRET);
  if (verifiedToken) {
    req.userId = verifiedToken.id;
    next();
  } else {
    res.status(403).json({
      msg: "token not verified",
    });
  }
}
app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    msg: "you are logged in",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );

    console.log(user);
    res.json({
      token: token,
      msg: "User signed in",
    });
  } else {
    res.status(403).json({
      msg: "User is not found ",
    });
  }
});
app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;
  await TodoModel.create({
    title: title,
    userId: req.userId,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", auth, async (req, res) => {
  const todos = await TodoModel.find({
    userId: req.userId,
  });
  res.json({
    todos: todos,
  });
});
app.listen(3000);
