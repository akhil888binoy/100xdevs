const express = require("express");
const users = require("./users");
const app = express();

app.use(express.json());

app.get("/:userName", (req, res) => {
  const userName = req.params.userName;
  const user = users.find((u) => u.name === userName);
  res.json({
    todos: user.todos,
  });
});

app.post("/:userName", (req, res) => {
  const todo = req.body.todo;
  const userName = req.params.userName;
  const user = users.find((u) => u.name === userName);
  let nextId = user.todos.length + 1;
  user.todos.push({
    id: nextId++,
    title: todo,
    completed: false,
  });
  res.json({
    todos: user.todos,
    msg: "Added todo",
  });
});

app.delete("/:userName", (req, res) => {
  const deleteId = req.body.deleteId - 1;
  const userName = req.params.userName;
  const user = users.find((u) => u.name === userName);
  user.todos.splice(deleteId, 1);
  res.json({
    todos: user.todos,
    msg: "Deleted todo",
  });
});

app.put("/:userName", (req, res) => {
  const updateId = req.body.updateId;
  const userName = req.params.userName;
  const newTodo = req.body.newTodo;
  const user = users.find((u) => u.name === userName);
  const todo = user.todos.find((todo) => todo.id == updateId);
  todo.title = newTodo;
  res.json({
    todo: todo,
    msg: "updated Todo",
  });
});

app.listen(3000);
