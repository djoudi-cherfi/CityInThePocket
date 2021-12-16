-- Revert cityinthepocket:addHasShop from pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "user"
DROP COLUMN "has_shop";

COMMIT;
