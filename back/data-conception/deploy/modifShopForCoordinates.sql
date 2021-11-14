-- Deploy cityinthepocket:modifShopForCoordinates to pg

BEGIN;

ALTER TABLE "shop"

ADD COLUMN "longitude" decimal NOT NULL DEFAULT '2.320041',
ADD COLUMN "latitude" decimal NOT NULL DEFAULT '48.8588897';

COMMIT;
