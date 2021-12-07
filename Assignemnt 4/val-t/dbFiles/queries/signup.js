// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const PlayerSignup = async (username, password) => {
  try {
    const playerSignup = await sql.promise().query(
        `INSERT INTO User (name, password)
        VALUES ('${username}', '${password}')`
    );
    console.log(playerSignup[0]);
    return playerSignup[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  PlayerSignup,
};
