// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const MostWins = async() => {
    try {
        const mostWins = await sql.promise().query(
        `SELECT username, pWin
        FROM Player
        ORDER BY pWin DESC`);

        return mostWins[0];
    } catch {
        console.log(error);
    }
}

const TopAgents = async() => {
    try {
        const topAgents = await sql.promise().query(
        `SELECT aName,aType,aWins
        FROM Agent
        WHERE aWins > (SELECT AVG(aWins) as avg
        FROM Agent)`);

        return topAgents[0];
    } catch {
        console.log(error);
    }
}

const TopRegionTeam = async() => {
    try {
        const topRegionTeam = await sql.promise().query(
        `CREATE VIEW tournamentsNA AS (SELECT tournamentId
            FROM Tournament
            WHERE region ='North America')
        CREATE VIEW matchesInNA AS (SELECT matchId
            FROM VMatch
            RIGHT JOIN tournamentsNA
            ON VMatch.tournamentId = tournamentsNa.tournamentId)
        CREATE VIEW teamsInNA AS (SELECT DISTINCT(teamId)
            FROM Roster
            RIGHT JOIN matchesInNA
            ON Roster.matchId = matchesInNA.matchId)
        CREATE VIEW teamInfo AS (SELECT Team.tName, Team.tWins
            FROM Team
            RIGHT JOIN teamsInNA
            ON Team.teamId = teamsInNA.teamId)
        SELECT tName, tWins
        FROM teamInfo
        WHERE tWins = (SELECT Max(tWins) FROM teamInfo)`);

        return topRegionTeam[0];
        
    } catch {
        console.log(error);
    }
}

module.exports = {
    MostWins,
    TopAgents,
    TopRegionTeam
}