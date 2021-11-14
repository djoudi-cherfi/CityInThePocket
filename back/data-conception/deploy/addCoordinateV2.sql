-- Deploy cityinthepocket:addCoordinateV2 to pg

BEGIN;

ALTER TABLE "shop"
ADD COLUMN "coordinates" TEXT NOT NULL DEFAULT '[48.862725, 2.287592]';

COMMIT;
