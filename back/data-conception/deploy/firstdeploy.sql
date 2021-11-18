-- Deploy cityinthepocket:firstdeploy to pg

BEGIN;

/* MarketPlace  */ 

CREATE TABLE marketplace (
    
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    city TEXT NOT NULL,
    slug TEXT NOT NULL,
    postal_code INT NOT NULL,
    create_date TIMESTAMPTZ DEFAULT now()
);

/* User  */ 

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    avatar TEXT NOT NULL,
    phone_number INT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    postal_code INT NOT NULL,
    create_date TIMESTAMPTZ DEFAULT now()
);

/* Shop  */ 

CREATE TABLE shop (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    company_name TEXT NOT NULL,
    siret BIGINT NOT NULL,
    description TEXT NOT NULL,
    phone_number INT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    email TEXT NOT NULL,
    user_id INT REFERENCES "user"(id), 
    marketplace_id INT REFERENCES marketplace(id)
);

/* Product  */ 

CREATE TABLE product (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT  NOT NULL,
    price DECIMAL NOT NULL,
    shop_id INT REFERENCES shop(id)
);

/* Category  */ 

CREATE TABLE category (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL
);

/* Shop has category */ 

CREATE TABLE shop_has_category (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT REFERENCES category(id),
    shop_id INT REFERENCES shop(id)
);

COMMIT;
