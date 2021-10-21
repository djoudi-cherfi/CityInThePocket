-- Deploy cityinthepocket:verifiedAccount to pg

BEGIN;


ALTER TABLE "user"
ADD COLUMN "verified" boolean NOT NULL DEFAULT FALSE;

COMMIT;

