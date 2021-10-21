-- Deploy cityinthepocket:modifShopHasCategory to pg

BEGIN;

ALTER TABLE shop_has_category
DROP CONSTRAINT shop_has_category_category_id_fkey;

ALTER TABLE shop_has_category
ADD CONSTRAINT shop_has_category_category_id_fkey
    FOREIGN KEY (category_id)
    REFERENCES category(id)
    ON DELETE CASCADE;

    

COMMIT;
