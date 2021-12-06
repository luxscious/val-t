// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

// Get User const
const GetUsers = async() => {
    try {

        // Selects all from user
        let getUsers = sql.promise().query('SELECT * from User');

        // Returns the users, and a whole bunch of other info
        return getUsers;

    } catch {
        console.log(error);
    }
}

// Create User const
const CreateUser = async(user) => {
    try {

        // Inserts a user into the database
        let createUser = sql.promise().query(`INSERT INTO User(name, email, password)VALUES
        ('${user.name}', '${user.email}', '${user.password}')`);
        
        // Returns the added user
        return createUser;

    } catch {
        console.log(error);
    }
}

// Exports all the consts
module.exports = {
    GetUsers,
    CreateUser
}
