// Uses the mysql2 libraries
const mysql = require("mysql2");

// Connects to the db using given values
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shopping30!!",
  database: "valt",
});

// Shows error, otherwise state that the connection was successful
connection.connect((error) => {
  if (error) throw error;
  console.log("Database connection successful.");
});

module.exports = connection;
