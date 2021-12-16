-- Revert cityinthepocket:modifShop from pg

BEGIN;

ALTER TABLE "shop"
ALTER COLUMN siret TYPE BIGINT USING siret::BIGINT,
ALTER COLUMN phone_number TYPE INT USING phone_number::INT,
ALTER COLUMN phone_number DROP DEFAULT,


DROP COLUMN postal_code,
DROP COLUMN create_date;

DROP TABLE shop_has_img;

DROP TABLE product_has_img;
 
COMMIT;
