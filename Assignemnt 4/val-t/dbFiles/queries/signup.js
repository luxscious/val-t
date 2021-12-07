// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const PlayerSignup = async (email, username, password) => {
  try {
    const playerSignup = await sql.promise().query(
      `INSERT INTO User (name, email, password)
        VALUES ('${username}', '${email}', '${password}')`
    );
    return "success";
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  PlayerSignup,
};
