-- Revert cityinthepocket:dropdefaultshop from pg

BEGIN;

ALTER TABLE "shop"
ALTER COLUMN phone_number SET DEFAULT '0606060606',
ALTER COLUMN postal_code SET DEFAULT '75000';

COMMIT;
