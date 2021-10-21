-- Revert cityinthepocket:addCoordinateV2 from pg

BEGIN;

ALTER TABLE shop
DROP COLUMN coordinates;
COMMIT;
