-- Deploy cityinthepocket:userBooleanPolicy to pg

BEGIN;

ALTER TABLE "user" 
ADD COLUMN policy_agree BOOLEAN DEFAULT FALSE;

COMMIT;
