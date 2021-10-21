-- Revert cityinthepocket:verifiedAccount from pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN "verified";
COMMIT;
