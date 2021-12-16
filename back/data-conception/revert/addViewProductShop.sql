-- Revert cityinthepocket:modifImgShop from pg

BEGIN;

ALTER TABLE shop_has_img
ALTER COLUMN img DROP DEFAULT;

COMMIT;
