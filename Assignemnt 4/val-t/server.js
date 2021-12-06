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

// Setting up the port 3001 and creating the app (should it be 3000?))
const API_PORT = process.env.PORT || 3001;
const app = express();

// cors port at 3002
var corsOptions = {
    origin: "http://localhost:3002"
};

// Uses cors, and express json/urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Shows hello api on 127.0.0.1:3001/api
app.post("/login", (req, res) => {
    res.json({message: "Hello API"});
});

// testing the login
login.PlayerLogin("Joe", "abcd").then(res => {
    console.log(res);
});

// Listens on port 3001 (should it be 3000?)
app.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`);
})