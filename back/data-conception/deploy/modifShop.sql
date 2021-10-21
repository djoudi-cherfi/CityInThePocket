-- Deploy cityinthepocket:modifShop to pg

BEGIN;

ALTER TABLE "shop"
ALTER COLUMN siret TYPE TEXT,
ALTER COLUMN phone_number TYPE TEXT,
ALTER COLUMN phone_number SET DEFAULT '0606060606',
ALTER COLUMN phone_number SET NOT NULL,

ADD COLUMN postal_code TEXT NOT NULL DEFAULT '75000',
ADD COLUMN create_date TIMESTAMPTZ DEFAULT now();


CREATE TABLE shop_has_img (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    img TEXT NOT NULL DEFAULT 'shop_img.png',
    shop_id INT REFERENCES shop(id)    
);

CREATE TABLE product_has_img (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    img TEXT NOT NULL DEFAULT 'product_img.png',
    product_id INT REFERENCES product(id)    
);


COMMIT;
