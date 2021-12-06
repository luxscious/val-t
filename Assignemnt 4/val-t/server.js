//TODO: get rid of userOp/user.js

// Required libraries
const express = require("express");
const cors = require("cors");

// Required file dependencies
const User = require("./dbFiles/config/user");
const userOps = require("./dbFiles/tables/userOperations");
const login = require("./dbFiles/queries/login");

// Setting up the port 3001 and creating the app
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
app.post("/api", (req, res) => {
    res.json({message: "Hello API"});
});

// Creates a test user and adds it to the database
// Will probably just be a for loop for adding all users
//let testUser = new User('Joe', 'joe@gmail.com', 'abcd');
//userOps.CreateUser(testUser);

login.PlayerLogin("Joe", "abcd").then(res => {
    console.log(res);
});

// Listens on port 3001
app.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`);
})