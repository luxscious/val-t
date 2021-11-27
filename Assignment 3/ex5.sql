-- Query 1
SELECT COUNT(startDate)as Started
FROM Tournament 
WHERE DATE(startDate) < DATE('2021-11-25');

-- Query 2
SELECT username,pWin
FROM Player
ORDER BY pWin DESC;

-- Query 3
CREATE VIEW usersFromWinningTeam AS (SELECT userId 
				FROM TeamPlayers
				WHERE teamId = (SELECT teamId 
								FROM Team 
								WHERE
								tName=(SELECT mWinner
									   FROM VMatch
									   WHERE tournamentId = 1 AND bracketLevel = (SELECT maxBracketLevel 
                                                                                  FROM Tournament 
                                                                                  WHERE TournamentId = '1'))));
SELECT username FROM Player RIGHT JOIN usersFromWinningTeam ON Player.userId = usersFromWinningTeam.userId;
-- Query 4
SELECT aName,aType,aWins
FROM Agent
WHERE aWins > (SELECT AVG(aWins) as avg
			   FROM Agent);
-- Query 5
CREATE VIEW tournamentsNA AS (SELECT tournamentId
								  FROM Tournament
								  WHERE region ='North America');
CREATE VIEW matchesInNA AS (
			SELECT matchId FROM VMatch RIGHT JOIN tournamentsNA ON  VMatch.tournamentId =tournamentsNa.tournamentId);

CREATE VIEW teamsInNA AS (
			SELECT DISTINCT(teamId) FROM Roster RIGHT JOIN matchesInNA ON Roster.matchId = matchesInNA.matchId);

CREATE VIEW teamInfo AS (
            SELECT Team.tName, Team.tWins FROM Team  RIGHT JOIN teamsInNA ON Team.teamId = teamsInNA.teamId);
SELECT tName, tWins FROM teamInfo WHERE tWins = (SELECT Max(tWins) FROM teamInfo);                                                              
-- Query 6
SELECT tName FROM Team WHERE teamId NOT IN (SELECT teamId from Roster);
-- Query 7
SELECT tName,tLosses
FROM Team WHERE tLosses = 0 ;