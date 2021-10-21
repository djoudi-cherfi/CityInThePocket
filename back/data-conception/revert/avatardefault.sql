-- Revert cityinthepocket:avatardefault from pg

BEGIN;

ALTER TABLE "user"
DROP CONSTRAINT DF_AVATAR;
COMMIT;
