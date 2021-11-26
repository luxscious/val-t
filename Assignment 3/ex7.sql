-- 1 
CREATE VIEW PlayerLeaderBoard AS 
							  SELECT (username)
                              FROM Player
                              ORDER BY pWin DESC;
SELECT * FROM PlayerLeaderBoard;
-- 2 
CREATE VIEW TeamLeaderBoard AS
							SELECT (tName)
                            FROM Team
                            ORDER BY tWins DESC;
SELECT * FROM TeamLeaderBoard;


-- 3 
CREATE VIEW TopAgents AS
					  SELECT (aName)
                      FROM Agent 
                      WHERE aWins > (SELECT AVG(aWins) as avg 
									 FROM Agent);
SELECT * FROM TopAgents;

INSERT INTO TeamLeaderBoard
VALUES ('luxscious');
SELECT * FROM TeamLeaderBoard WHERE tName='luxscious';