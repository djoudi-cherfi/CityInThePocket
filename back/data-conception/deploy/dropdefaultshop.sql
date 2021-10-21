-- Deploy cityinthepocket:dropdefaultshop to pg

BEGIN;

ALTER TABLE "shop"
ALTER COLUMN phone_number DROP DEFAULT,

ALTER COLUMN postal_code DROP DEFAULT;
COMMIT;
