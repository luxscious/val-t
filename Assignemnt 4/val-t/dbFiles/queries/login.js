// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const PlayerLogin = async(username, password) => {
    try {
        const playerLogin = await sql.promise().query(
        `SELECT userId, name
        FROM User
        WHERE name = '${username}' AND password = '${password}'`);

        return playerLogin[0];

    } catch {
        console.log(error);
    }
}

module.exports = {
    PlayerLogin
}