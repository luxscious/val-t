use valt;
INSERT INTO User(name)VALUES('Tom');
INSERT INTO Sponsor(userId,sponsorShipLevel) Values(1,0);
INSERT INTO Team(tName)Values('teamAwesome');

INSERT INTO User(name)VALUES('Joe');
INSERT INTO Sponsor(userId,sponsorShipLevel) Values(2,0);
INSERT INTO Team(tName)Values('teamAwesomer');


INSERT INTO TeamSponsored(teamId,userId)
SELECT teamId, userId
FROM Team, Sponsor;


INSERT INTO User(name)VALUES('Jill');
INSERT INTO Sponsor(userId,sponsorShipLevel) Values(3,0);
INSERT INTO Team(tName)Values('team');

INSERT INTO TeamSponsored(userId,teamId)
VALUES (3, 3);

INSERT INTO User(name)VALUES('Rob');
INSERT INTO Sponsor(userId,sponsorShipLevel) Values(4,0);
INSERT INTO Team(tName)Values('teamAwesomer');

INSERT INTO TeamSponsored(userId,teamId, sponsoredAmount)
VALUES (4, 4, 0);
SELECT * FROM TeamSponsored;
