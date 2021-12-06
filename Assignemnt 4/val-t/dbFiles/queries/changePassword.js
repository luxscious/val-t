// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const ChangePass = async(username, newPassword) => {
    try {
        const changePass = await sql.promise().query(
        `UPDATE User
        SET password = '${newPassword}' 
        WHERE name = '${username}'`);
        
        return changePass[0];

    } catch {
        console.log(error);
    }
}

module.exports = {
    ChangePass
}