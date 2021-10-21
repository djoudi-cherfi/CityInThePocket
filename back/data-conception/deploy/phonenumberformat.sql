-- Deploy cityinthepocket:phonenumberformat to pg

BEGIN;

ALTER TABLE "user"
ALTER COLUMN "phone_number" TYPE VARCHAR(10);

COMMIT;
