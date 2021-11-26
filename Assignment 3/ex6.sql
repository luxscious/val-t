-- 1
-- UPDATE User
-- SET password =  CASE userId
-- 		   WHEN '1' THEN 'abcd'
--            WHEN '2' THEN 'qwerty'
--            WHEN '3' THEN 'monkey'
--            ELSE password
--            END
--            WHERE userId IN('1','2','3');
--            
-- 2 
-- INSERT INTO Player (userId)
-- SELECT userId 
-- FROM User 
-- WHERE email 
-- LIKE '%@mail.com';

-- 3
-- INSERT INTO User VALUES (1001,'company1','fakeemail@gmail.com','1234564');
-- INSERT INTO User VALUES (1002,'company2','fakeemail2@gmail.com','12343564');
-- INSERT INTO Sponsor VALUES(1001,0);
-- INSERT INTO Sponsor VALUES(1002,0);
-- INSERT INTO SponsoredPlayer VALUES(1,1001);
-- INSERT INTO SponsoredPlayer VALUES(2,1002);
DELETE FROM SponsoredPlayer
WHERE userIdP IN (1,2);


