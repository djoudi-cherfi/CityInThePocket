-- Revert cityinthepocket:modifImgShop from pg

BEGIN;

ALTER TABLE shop_has_img
ALTER COLUMN img SET NOT NULL;
COMMIT;
