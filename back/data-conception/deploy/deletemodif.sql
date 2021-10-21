-- Deploy cityinthepocket:deletemodif to pg

BEGIN;

ALTER TABLE product
DROP CONSTRAINT product_shop_id_fkey;

ALTER TABLE product
ADD CONSTRAINT product_shop_id_fkey
    FOREIGN KEY (shop_id)
    REFERENCES shop(id)
    ON DELETE CASCADE;

ALTER TABLE shop
DROP CONSTRAINT shop_marketplace_id_fkey;

ALTER TABLE shop 
ADD CONSTRAINT shop_marketplace_id_fkey
    FOREIGN KEY (marketplace_id)
    REFERENCES marketplace(id)
    ON DELETE CASCADE;

COMMIT;
