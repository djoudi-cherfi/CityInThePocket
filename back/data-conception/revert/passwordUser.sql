-- Revert cityinthepocket:passwordUser from pg

BEGIN;

ALTER TABLE "user"
DELETE COLUMN "password";

COMMIT;
