// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const playerStats = async (userId) => {
  try {
    const getStats = await sql.promise().query(
      `SELECT pWin as wins, pLoss as losses
        FROM Player
        WHERE userId = '${userId.userId}'`
    );
    return getStats[0];
  } catch (error) {
    console.log(error);
  }
};

const getTeamsPlayer = async (userId) => {
  try {
    const getTeam = await sql.promise().query(
      `SELECT teamId as id, tName as name, tWins as wins, tLosses as losses
            FROM Team
            WHERE teamId = (SELECT teamId FROM TeamPlayers WHERE userId ='${userId}')`
    );
    return getTeam[0];
  } catch (err) {
    console.log(err);
  }
};
const getTeamsSubscriber = async (userId) => {
  try {
    const getTeam = await sql.promise().query(
      `SELECT tName as name, tWins as wins, tLoss as losses,
              FROM Team
              WHERE teamId = (SELECT teamId FROM SubscribedToTeam WHERE userId ='${userId}'`
    );
    return getTeam[0];
  } catch (err) {
    console.log(err);
  }
};
const getTeamsSponsor = async (userId) => {
  try {
    const getTeam = await sql.promise().query(
      `SELECT tName as name, tWins as wins, tLoss as losses,
              FROM Team
              WHERE teamId = (SELECT teamId FROM TeamSponsored WHERE userId ='${userId}'`
    );
    return getTeam[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  playerStats,
  getTeamsPlayer,
  getTeamsSponsor,
  getTeamsSubscriber,
};
