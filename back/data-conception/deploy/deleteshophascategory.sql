-- Deploy cityinthepocket:deleteshophascategory to pg

BEGIN;

ALTER TABLE shop_has_category
DROP CONSTRAINT shop_has_category_shop_id_fkey;

ALTER TABLE shop_has_category
ADD CONSTRAINT shop_has_category_shop_id_fkey
    FOREIGN KEY (shop_id)
    REFERENCES shop(id)
    ON DELETE CASCADE;

COMMIT;
