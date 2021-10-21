-- Verify cityinthepocket:verifiedAccount on pg

BEGIN;

SELECT * FROM "user" WHERE verified = FALSE;
ROLLBACK;
