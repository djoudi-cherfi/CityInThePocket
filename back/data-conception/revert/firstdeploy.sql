-- Revert cityinthepocket:firstdeploy from pg

BEGIN;

DROP TABLE shop_has_category;

DROP TABLE product;

DROP TABLE shop;

DROP TABLE "user";

DROP TABLE category;

DROP TABLE marketplace;

COMMIT;
