// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
const mysql = require("mysql2");

const TournamentList = async (tRegion) => {
  try {
    console.log("TREGION", tRegion);
    const tournamentList = await sql.promise().query(
      `SELECT *
        FROM Tournament
        WHERE region = '${tRegion}'
        ORDER BY startDate DESC`
    );
    return tournamentList[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  TournamentList,
};
