-- Revert cityinthepocket:deletemodif from pg

BEGIN;

-- Deploy cityinthepocket:deletemodif to pg


ALTER TABLE product
DROP CONSTRAINT product_shop_id_fkey;

ALTER TABLE product
ADD CONSTRAINT product_shop_id_fkey
    FOREIGN KEY (shop_id)
    REFERENCES shop(id);

ALTER TABLE shop
DROP CONSTRAINT shop_marketplace_id_fkey;

ALTER TABLE shop 
ADD CONSTRAINT shop_marketplace_id_fkey
    FOREIGN KEY (marketplace_id)
    REFERENCES marketplace(id);


COMMIT;
