//TODO: get rid of userOp/user.js

// Required libraries
const express = require("express");
const cors = require("cors");

// Required file dependencies
const login = require("./dbFiles/queries/login");
const changePassword = require("./dbFiles/queries/changePassword");
const leaderboard = require("./dbFiles/queries/leaderboard");
const profile = require("./dbFiles/queries/profile");
const tournament = require("./dbFiles/queries/tournament");
const { promise } = require("./dbFiles/config/dbConfig");

// Setting up the port 5000
const API_PORT = process.env.PORT || 5000;
const app = express();

// cors port at 5001
var corsOptions = {
  origin: "http://localhost:3000",
};

// Uses cors, and express json/urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Shows hello api on 127.0.0.1:3001/api
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  login.PlayerLogin(username, password).then((info) => {
    if (info.length < 1) {
      res.sendStatus(404);
    } else {
      res.json(info);
      res.sendSatus(200);
    }
  });
  //   res.json({ message: "Hello API" });
});

// // testing the login
// login.PlayerLogin("Joe", "abcd").then(res => {
//     console.log(res);
// });

// Listens on port 3001 (should it be 3000?)
app.listen(API_PORT, () => {
  console.log(`listening on port ${API_PORT}`);
});
