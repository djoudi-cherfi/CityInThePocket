-- Verify cityinthepocket:refreshToken on pg

BEGIN;

SELECT * FROM refresh_token;

ROLLBACK;
