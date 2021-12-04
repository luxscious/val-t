LOAD DATA INFIlE "users.csv"
INTO TABLE User
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "players.csv"
INTO TABLE Player
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "tournaments.csv"
INTO TABLE Tournament
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "teams.csv"
INTO TABLE Team
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "matches.csv"
INTO TABLE VMatch
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "rosters.csv"
INTO TABLE Roster
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFIlE "playerTeams.csv"
INTO TABLE teamplayers
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

INSERT INTO Agent VALUES ("Brimstone","Controller",10,0);
INSERT INTO Agent VALUES ("Viper","Controller",0,0);
INSERT INTO Agent VALUES ("Omen","Controller",0,0);
INSERT INTO Agent VALUES ("Astra","Controller",0,0);
INSERT INTO Agent VALUES ("Killjoy","Sentinel",0,0);
INSERT INTO Agent VALUES ("Cypher","Sentinel",0,0);
INSERT INTO Agent VALUES ("Sage","Sentinel",3,0);
INSERT INTO Agent VALUES ("Chamber","Sentinel",0,0);
INSERT INTO Agent VALUES ("Sova","Initiator",2,0);
INSERT INTO Agent VALUES ("KAY/O","Initiator",0,0);
INSERT INTO Agent VALUES ("Breach","Initiator",0,0);
INSERT INTO Agent VALUES ("Skye","Initiator",0,0);
INSERT INTO Agent VALUES ("Jett","Duelist",10,0);
INSERT INTO Agent VALUES ("Raze","Duelist",0,0);
INSERT INTO Agent VALUES ("Pheonix","Duelist",0,0);
INSERT INTO Agent VALUES ("Reyna","Duelist",0,0);
INSERT INTO Agent VALUES ("Yoru","Duelist",7,0);

INSERT INTO User VALUES (1001,'company1','fakeemail@gmail.com','1234564');
INSERT INTO User VALUES (1002,'company2','fakeemail2@gmail.com','12343564');
INSERT INTO Sponsor VALUES(1001,0);
INSERT INTO Sponsor VALUES(1002,0);
INSERT INTO SponsoredPlayer VALUES(1,1001);
INSERT INTO SponsoredPlayer VALUES(2,1002);