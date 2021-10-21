-- Deploy cityinthepocket:modifImgShop to pg

BEGIN;

ALTER TABLE shop_has_img
ALTER COLUMN img DROP NOT NULL;
COMMIT;
