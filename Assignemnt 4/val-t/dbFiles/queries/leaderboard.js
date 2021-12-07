// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const playerList = async () => {
  try {
    const mostWins = await sql.promise().query(
      `SELECT username as name, pWin as wins
        FROM Player
        ORDER BY pWin DESC`
    );

    return mostWins[0];
  } catch (error) {
    console.log(error);
  }
};
const teamsList = async () => {
  try {
    const mostWins = await sql.promise().query(
      `SELECT tName as name, tWins as wins
          FROM Team
          ORDER BY tWins DESC`
    );

    return mostWins[0];
  } catch (error) {
    console.log(error);
  }
};
const agentsList = async () => {
  try {
    const topAgents = await sql.promise().query(
      `SELECT aName as name,aWins as wins
        FROM Agent
        WHERE aWins > (SELECT AVG(aWins) as avg
        FROM Agent)`
    );

    return topAgents[0];
  } catch (error) {
    console.log(error);
  }
};

const TopRegionTeams = async (region) => {
  try {
    console.log(region);
    const topRegionTeam = await sql.promise().query(
      `
      DROP VIEW IF EXISTS tournamentsNA;
      DROP VIEW IF EXISTS matchesInNA;
      DROP VIEW IF EXISTS teamsInNA;
      DROP VIEW IF EXISTS teamInfo;
      CREATE VIEW tournamentsNA AS (SELECT tournamentId
        FROM Tournament
        WHERE region ='${region}');
    CREATE VIEW matchesInNA AS (SELECT matchId
        FROM VMatch
        RIGHT JOIN tournamentsNA
        ON VMatch.tournamentId = tournamentsNa.tournamentId);
    CREATE VIEW teamsInNA AS (SELECT DISTINCT(teamId)
        FROM Roster
        RIGHT JOIN matchesInNA
        ON Roster.matchId = matchesInNA.matchId);
    CREATE VIEW teamInfo AS (SELECT Team.tName, Team.tWins
        FROM Team
        RIGHT JOIN teamsInNA
        ON Team.teamId = teamsInNA.teamId);     
    SELECT tName, tWins
    FROM teamInfo
    WHERE tWins = (SELECT Max(tWins) FROM teamInfo);
  `
    );
    return topRegionTeam[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  agentsList,
  playerList,
  teamsList,
  TopRegionTeams,
};
