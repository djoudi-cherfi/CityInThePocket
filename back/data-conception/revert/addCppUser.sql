-- Deploy cityinthepocket:user to pg

BEGIN;

ALTER TABLE "user"
DROP COLUMN conditions_privacy_policy;

COMMIT;
