-- Revert cityinthepocket:modifShop from pg

BEGIN;

DROP VIEW "view_product_shop";
 
COMMIT;
