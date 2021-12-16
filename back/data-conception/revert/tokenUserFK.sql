-- Revert cityinthepocket:tokenUserFK from pg

BEGIN;

-- Deploy cityinthepocket:tokenUserFK to pg

BEGIN;

ALTER TABLE refresh_token
    DROP CONSTRAINT refresh_token_user_id_fkey,
    ADD CONSTRAINT refresh_token_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES "user"(id);

COMMIT;

