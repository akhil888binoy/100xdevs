const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const users = [];
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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "hey you are signed in ",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const filterUser = users.find(
    (item) => item.username == username && item.password == password
  );

  if (!filterUser) {
    res.json({
      msg: "User doesnt exsist",
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

app.get("/me", auth, (req, res) => {
  const foundUser = users.find((item) => item.username == req.username);
  if (!foundUser.username) {
    res.json({
      msg: "User doesnt exist",
    });
  } else {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});

app.listen(3000);
