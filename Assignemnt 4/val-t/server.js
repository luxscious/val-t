//TODO: get rid of userOp/user.js

// Required libraries
const express = require("express");
const cors = require("cors");

// Required file dependencies
const login = require("./dbFiles/queries/login");
const changeUser = require("./dbFiles/queries/changeUser");
const leaderboard = require("./dbFiles/queries/leaderboard");
const profile = require("./dbFiles/queries/profile");
const tournament = require("./dbFiles/queries/tournament");
const { promise } = require("./dbFiles/config/dbConfig");

// Setting up the port 5000
const API_PORT = process.env.PORT || 5000;
const app = express();

// cors port at 3000
var corsOptions = {
  origin: "http://localhost:3000",
};

// Uses cors, and express json/urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.post("/topTeams", (req, res) => {
  leaderboard.teamsList().then((data) => {
    res.json(data);
  });
});
app.post("/topPlayers", (req, res) => {
  leaderboard.playerList().then((data) => {
    res.json(data);
  });
});

app.post("/topAgents", (req, res) => {
  leaderboard.agentsList().then((data) => {
    res.json(data);
  });
});

app.post("/topRegionTeams", (req, res) => {
  const region = req.body.region;
  leaderboard.TopRegionTeams(region).then((data) => {
    res.json({ data });
  });
});

app.post("/getPlayerStats", (req, res) => {
  const userId = req.body;
  profile.playerStats(userId).then((data) => {
    res.json({ data });
  });
});
app.post("/getTeamPlayerStats", (req, res) => {
  const userId = req.body.userId;
  profile.getTeamsPlayer(userId).then((data) => {
    res.json({ data });
  });
});
app.post("/getTeamSubsriberStats", (req, res) => {
  const userId = req.body.userId;
  profile.getTeamsSubscriber(userId).then((data) => {
    res.json({ data });
  });
});
app.post("/getTeamSponsorStats", (req, res) => {
  const userId = req.body.userId;
  profile.getTeamsSponsor(userId).then((data) => {
    res.json({ data });
  });
});

app.post("/changeUsername", (req, res) => {
  const userId = req.body.userId;
  const username = req.body.username;
  changeUser.ChangeUsername(userId, username).then((data) => {
    res.sendStatus(200);
  });
});
app.post("/changePassword", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  changeUser.ChangePass(userId, password).then((data) => {
    res.sendStatus(200);
  });
});

// Listens on port 5000
app.listen(API_PORT, () => {
  console.log(`listening on port ${API_PORT}`);
});
