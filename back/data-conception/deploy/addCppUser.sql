-- Deploy cityinthepocket:user to pg

BEGIN;

ALTER TABLE "user"
ADD COLUMN "conditions_privacy_policy" boolean NOT NULL DEFAULT FALSE;

COMMIT;
