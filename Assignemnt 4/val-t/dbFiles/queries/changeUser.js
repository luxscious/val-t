// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const ChangePass = async (userId, newPassword) => {
  try {
    const changePass = await sql.promise().query(
      `UPDATE User
        SET password = '${newPassword}' 
        WHERE userId = '${userId}'`
    );

    return changePass[0];
  } catch (error) {
    console.log(error);
  }
};
const ChangeUsername = async (userId, newUsername) => {
  try {
    const changeUser = await sql.promise().query(
      `UPDATE User
        SET name = '${newUsername}' 
        WHERE userId = '${userId}'`
    );

    return changeUser[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  ChangePass,
  ChangeUsername,
};
