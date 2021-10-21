-- Deploy cityinthepocket:avatardefault to pg

BEGIN;

ALTER TABLE "user"
ALTER COLUMN "avatar" SET DEFAULT 'avatar.png';
COMMIT;
