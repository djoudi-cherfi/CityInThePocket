-- Deploy cityinthepocket:addHasShop to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "user"
ADD COLUMN "has_shop" boolean NOT NULL DEFAULT FALSE;

COMMIT;
