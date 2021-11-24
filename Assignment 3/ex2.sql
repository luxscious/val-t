
DROP DATABASE valT;
CREATE DATABASE valT;
USE valT;
CREATE TABLE IF NOT EXISTS User( 
userId BIGINT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(userId),
name VARCHAR(30),
email VARCHAR(30),
password VARCHAR(30) 
);

CREATE TABLE IF NOT EXISTS Team(
teamId BIGINT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(teamId),
tName VARCHAR(30),
tWins INT,
tLosses INT
);

CREATE TABLE IF NOT EXISTS Agent(
agentId INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(agentId),
aName VARCHAR(30) NOT NULL,
aWins INT,
aLosses INT
);

CREATE TABLE IF NOT EXISTS Tournament(
tournamentId BIGINT NOT NULL PRIMARY KEY,
region VARCHAR(30) NOT NULL,
league VARCHAR(30) NOT NULL,
startDate VARCHAR(30) NOT NULL,
endDate VARCHAR(30),
buyIn INT,
payOut INT
);
CREATE TABLE IF NOT EXISTS Player(
	userId BIGINT NOT NULL AUTO_INCREMENT,
    pRank CHAR(20),
    pWin INT,
    pLoss INT,
	PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES User(userId)
);


CREATE TABLE IF NOT EXISTS Bracket(
    maxBracketLevel INT NOT NULL UNIQUE,
    tournamentId BIGINT NOT NULL,
	PRIMARY KEY (maxBracketLevel),
    FOREIGN KEY (tournamentId) REFERENCES Tournament(tournamentId)
);

CREATE TABLE IF NOT EXISTS VMatch(
	matchId BIGINT NOT NULL AUTO_INCREMENT,
    mWinner CHAR(50),
    bracketLevel INT,
    maxBracketLevel INT,
    tournamentId BIGINT NOT NULL,
	PRIMARY KEY (matchId),
    FOREIGN KEY (maxBracketLevel) REFERENCES Bracket(maxBracketLevel),
    FOREIGN KEY (tournamentId) REFERENCES Tournament(tournamentId)
);

CREATE TABLE IF NOT EXISTS Roster(
    matchId BIGINT NOT NULL,
    teamId BIGINT NOT NULL,
	PRIMARY KEY (matchId,teamId),
    FOREIGN KEY (matchId) REFERENCES VMatch(matchId),
	FOREIGN KEY (teamId) REFERENCES Team(teamId)
);

CREATE TABLE IF NOT EXISTS Subscriber(
    userId BIGINT NOT NULL,
	PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE IF NOT EXISTS Company(
userId BIGINT NOT NULL,
PRIMARY KEY(userId)
);

CREATE TABLE IF NOT EXISTS Sponsor(
    userId BIGINT NOT NULL,
    sponsorshipLevel INT,
	PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE IF NOT EXISTS SponsoredPlayer(
    userIdP BIGINT NOT NULL,
    userIdS BIGINT NOT NULL,
	PRIMARY KEY (userIdP,userIdS),
    FOREIGN KEY (userIdP) REFERENCES Player(UserId),
    FOREIGN KEY (userIdS) REFERENCES Sponsor(userId)
);

CREATE TABLE IF NOT EXISTS SponsorTournament(
    userId BIGINT NOT NULL,
    tournamentId BIGINT NOT NULL,
    sponsoredAmount INT,
	PRIMARY KEY (tournamentId,userId),
    FOREIGN KEY (tournamentId) REFERENCES Tournament(tournamentId),
    FOREIGN KEY (userId) REFERENCES Sponsor(userId)
);

CREATE TABLE IF NOT EXISTS TeamSponsored(
    userId BIGINT NOT NULL,
    teamId BIGINT NOT NULL,
    sponsoredAmount INT,
	PRIMARY KEY (userId,teamId),
    FOREIGN KEY (userId) REFERENCES Sponsor(userId),
	FOREIGN KEY (teamId) REFERENCES Team(teamId)
);

CREATE TABLE IF NOT EXISTS SubscribedToTeam(
    userId BIGINT NOT NULL,
    teamId BIGINT NOT NULL,
	PRIMARY KEY (userId,teamId),
    FOREIGN KEY (userId) REFERENCES User(userId),
	FOREIGN KEY (teamId) REFERENCES Team(teamId)
);
CREATE TABLE IF NOT EXISTS SubscribedToTournament(
    userId BIGINT NOT NULL,
    tournamentId BIGINT NOT NULL,
	PRIMARY KEY (tournamentId,userId),
    FOREIGN KEY (tournamentId) REFERENCES Tournament(tournamentId),
    FOREIGN KEY (userId) REFERENCES User(userId)
);


