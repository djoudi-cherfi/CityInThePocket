-- Deploy cityinthepocket:modifCoordinates to pg

BEGIN;

ALTER TABLE shop
ALTER COLUMN longitude SET DEFAULT 2.320041,
ALTER COLUMN latitude  SET DEFAULT 48.8588897;
UPDATE shop SET longitude = 2.320041, latitude = 48.8588897;

COMMIT;
