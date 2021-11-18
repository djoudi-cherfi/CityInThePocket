-- Revert cityinthepocket:passwordUser from pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN "password";

COMMIT;
