-- Revert cityinthepocket:avatardefault from pg

BEGIN;

ALTER TABLE "user"
ALTER COLUMN "avatar" DROP DEFAULT;
COMMIT;
