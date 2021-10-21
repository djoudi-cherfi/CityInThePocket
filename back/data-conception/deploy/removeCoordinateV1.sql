-- Deploy cityinthepocket:removeCoordinateV1 to pg

BEGIN;

ALTER TABLE shop
DROP COLUMN longitude,
DROP COLUMN latitude;

COMMIT;
