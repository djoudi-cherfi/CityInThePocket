-- Deploy cityinthepocket:passwordUser to pg

BEGIN;

ALTER TABLE marketplace
ADD CONSTRAINT marketplace_slug_lowercase_ck
CHECK (slug = lower(slug));

COMMIT;
