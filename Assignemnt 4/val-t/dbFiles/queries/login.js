// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const PlayerLogin = async (username, password) => {
  try {
    const playerLogin = await sql.promise().query(
      `SELECT userId, name
        FROM User

        WHERE name = '${username}' AND password = '${password}'`
    );
    console.log(playerLogin[0]);
    return playerLogin[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  PlayerLogin,
};
