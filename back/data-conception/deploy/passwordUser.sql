-- Deploy cityinthepocket:passwordUser to pg

BEGIN;

ALTER TABLE "user"
ADD COLUMN "password" TEXT NOT NULL DEFAULT 'test';

COMMIT;
