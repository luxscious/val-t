
-- DROP DATABASE valT;
CREATE DATABASE valT;
USE valT;
CREATE TABLE IF NOT EXISTS User( 
userId BIGINT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(userId),
name VARCHAR(30) UNIQUE,
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
aName VARCHAR(30) NOT NULL PRIMARY KEY,
aType VARCHAR(30) NOT NULL,
aWins INT,
aLosses INT
);

CREATE TABLE IF NOT EXISTS Tournament(
tournamentId BIGINT NOT NULL PRIMARY KEY,
maxBracketLevel INT NOT NULL,
region VARCHAR(30) NOT NULL,
league VARCHAR(30) NOT NULL,
startDate DATE NOT NULL,
endDate DATE,
buyIn INT,
payOut INT
);
CREATE TABLE IF NOT EXISTS Player(
	userId BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30),
    pRank CHAR(20),
    pWin INT,
    pLoss INT,
	PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES User(userId),
    FOREIGN KEY (username) REFERENCES User(name)
);

CREATE TABLE IF NOT EXISTS VMatch(
	matchId BIGINT NOT NULL AUTO_INCREMENT,
	mWinner CHAR(50),
    bracketLevel INT,
    tournamentId BIGINT NOT NULL,
	PRIMARY KEY (matchId),
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
    FOREIGN KEY (userId) References User(userId),
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
    FOREIGN KEY (userId) REFERENCES Subscriber(userId),
	FOREIGN KEY (teamId) REFERENCES Team(teamId)
);
CREATE TABLE IF NOT EXISTS SubscribedToTournament(
    userId BIGINT NOT NULL,
    tournamentId BIGINT NOT NULL,
	PRIMARY KEY (tournamentId,userId),
    FOREIGN KEY (tournamentId) REFERENCES Tournament(tournamentId),
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE IF NOT EXISTS TeamPlayers(
userId BIGINT NOT NULL,
teamId BIGINT NOT NULL,
PRIMARY KEY (userId,teamId),
FOREIGN KEY (userId) REFERENCES Player(userId),
FOREIGN KEY (teamId) REFERENCES Team(teamId)
);

CREATE TABLE IF NOT EXISTS SubscribedToPlayer(
	userIdP BIGINT NOT NULL,
	userIdS BIGINT NOT NULL,
	PRIMARY KEY (userIdP,userIdS),
    FOREIGN KEY (userIdP) REFERENCES Player(userId),
	FOREIGN KEY (userIdS) REFERENCES Subscriber(userId)
);
CREATE TABLE IF NOT EXISTS AgentRoster(
aName VARCHAR(30) NOT NULL,
matchId BIGINT NOT NULL,
teamId BIGINT NOT NULL,
PRIMARY KEY (aName, matchId,teamId),
FOREIGN KEY (aName) REFERENCES Agent(aName),
FOREIGN KEY (matchId) REFERENCES VMatch(matchId),
FOREIGN KEY (teamId) REFERENCES Team(teamId)
);

DESCRIBE User;
DESCRIBE Team;
DESCRIBE Agent;
DESCRIBE Tournament;
DESCRIBE Player;
DESCRIBE Subscriber;
DESCRIBE Sponsor;
DESCRIBE VMatch;
DESCRIBE Roster;
DESCRIBE SponsorTournament;
DESCRIBE TeamSponsored;
DESCRIBE SubscribedToTeam;
DESCRIBE SubscribedToPlayer;
DESCRIBE Company;
DESCRIBE TeamPlayers;
DESCRIBE AgentRoster;