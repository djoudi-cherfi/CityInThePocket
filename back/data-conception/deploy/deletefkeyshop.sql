-- Deploy cityinthepocket:deletefkeyshop to pg

BEGIN;

-- Deploy cityinthepocket:deleteshophascategory to pg

ALTER TABLE shop
DROP CONSTRAINT shop_user_id_fkey;

ALTER TABLE shop
ADD CONSTRAINT shop_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES "user"(id)
    ON DELETE CASCADE;

COMMIT;
