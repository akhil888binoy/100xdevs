const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const users = require("./users");

const app = express();

app.use(express.json());
app.use(cors());

const JWT_SECRET = "akhilbinoy";

function auth(req, res, next) {
  const token = req.headers.token;
  const verifiedToken = jwt.verify(token, JWT_SECRET);
  if (!verifiedToken) {
    res.json({
      msg: "Token not verified",
    });
  } else {
    req.username = verifiedToken.username;
    next();
  }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
    todos: [],
  });
  res.json({
    msg: "user signed in",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find(
    (item) => item.username == username && item.password == password
  );
  if (!foundUser) {
    res.json({
      msg: "User donot exsist",
    });
  } else {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  }
});

app.get("/todos", auth, (req, res) => {
  const foundUser = users.find((item) => item.username == req.username);
  if (!foundUser) {
    res.json({
      msg: "User doesnt exsist",
    });
  } else {
    res.json({
      todos: foundUser.todos,
    });
  }
});

app.post("/todo", auth, (req, res) => {
  const todo = req.body.todo;
  const foundUser = users.find((item) => item.username == req.username);
  let todoId = foundUser.todos.length + 1;
  if (!foundUser) {
    res.json({
      msg: "User doesnt exsist",
    });
  } else {
    foundUser.todos.push({
      id: todoId++,
      todo: todo,
      completed: false,
    });
    res.json({
      msg: "Todo added",
    });
  }
});

app.delete("/todo/:todoId", auth, (req, res) => {
  const todoId = req.params.todoId - 1;
  const foundUser = users.find((item) => item.username == req.username);
  if (!foundUser) {
    res.json({
      msg: "User doesnt exsist",
    });
  } else {
    foundUser.todos.splice(todoId, 1);
    res.json({
      todos: foundUser.todos,
      msg: "Todo deleted",
    });
  }
});

app.put("/todo/:todoId", auth, (req, res) => {
  const updateTodo = req.body.updateTodo;
  const todoId = req.params.todoId;
  const foundUser = users.find((item) => item.username == req.username);
  const foundtodo = foundUser.todos.find((item) => item.id == todoId);
  if (!foundUser) {
    res.json({
      msg: "User not found",
    });
  } else if (!foundtodo) {
    res.json({
      msg: "Todo not found",
    });
  } else {
    foundtodo.todo = updateTodo;
    res.json({
      todos: foundUser.todos,
      msg: "Todo got updated",
    });
  }
});

app.listen(3000);
