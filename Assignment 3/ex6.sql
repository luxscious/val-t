-- 1
UPDATE User
SET password =  CASE userId
		   WHEN '1' THEN 'abcd'
           WHEN '2' THEN 'qwerty'
           WHEN '3' THEN 'monkey'
           ELSE password
           END
           WHERE userId IN('1','2','3');

-- 2 
INSERT IGNORE INTO Sponsor (userId)
SELECT (userId)
FROM User 
WHERE email 
LIKE '%@mail.com';

-- 3
DELETE FROM SponsoredPlayer
WHERE userIdP IN (1,2);


