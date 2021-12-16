-- Verify cityinthepocket:addHasShop on pg

BEGIN;

-- XXX Add verifications here.

SELECT * FROM "user" WHERE has_shop = FALSE;

ROLLBACK;
