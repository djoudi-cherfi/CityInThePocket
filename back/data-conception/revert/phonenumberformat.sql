-- Revert cityinthepocket:phonenumberformat from pg

BEGIN;

ALTER TABLE "user"
ALTER COLUMN phone_number  TYPE integer USING (phone_number::integer);

COMMIT;
