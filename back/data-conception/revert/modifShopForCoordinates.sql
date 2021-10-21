-- Revert cityinthepocket:modifShopForCoordinates from pg

BEGIN;

ALTER TABLE shop
DROP COLUMN longitude,
DROP COLUMN latitude;

COMMIT;