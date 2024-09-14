const express = require("express");
const app = express();
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthy = 0;
  let noOfUnHealthy = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy == "true") {
      noOfHealthy++;
    } else {
      noOfUnHealthy++;
    }
  }

  res.json({
    noOfHealthy,
    noOfKidneys,
    noOfUnHealthy,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Updated",
  });
});

app.delete("/", (req, res) => {
  if (atleastOneUnhealthy()) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy == "true") {
        newKidneys.push({
          healthy: "true",
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "DOne",
    });
  } else {
    res.status(411).json({
      msg: "You have not unhealthy kidney",
    });
  }
});

function atleastOneUnhealthy() {
  let oneunhealthy = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == "false") {
      oneunhealthy = true;
    }
  }
  return oneunhealthy;
}
app.listen(3000);
