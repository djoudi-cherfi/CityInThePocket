-- Revert cityinthepocket:userBooleanPolicy from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN policy_agree;

COMMIT;
