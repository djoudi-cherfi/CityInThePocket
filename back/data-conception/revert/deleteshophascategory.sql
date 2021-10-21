-- Revert cityinthepocket:deleteshophascategory from pg

BEGIN;

-- Deploy cityinthepocket:deleteshophascategory to pg


ALTER TABLE shop_has_category
DROP CONSTRAINT shop_has_category_shop_id_fkey;

ALTER TABLE shop_has_category
ADD CONSTRAINT shop_has_category_shop_id_fkey
    FOREIGN KEY (shop_id)
    REFERENCES shop(id);
COMMIT;

