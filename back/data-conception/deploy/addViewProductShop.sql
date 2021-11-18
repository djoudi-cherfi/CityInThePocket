-- Deploy cityinthepocket:modifImgShop to pg

BEGIN;

CREATE VIEW "view_product_shop" AS
    SELECT product.*, shop.company_name
    FROM "shop"
    JOIN product ON shop.id = product.shop_id;


COMMIT;
