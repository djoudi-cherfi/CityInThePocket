-- Revert cityinthepocket:refreshToken from pg

BEGIN;

DROP TABLE refresh_token;

COMMIT;
