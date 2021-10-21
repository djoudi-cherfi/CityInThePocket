-- Deploy cityinthepocket:refreshToken to pg

BEGIN;

CREATE TABLE refresh_token (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    token TEXT NOT NULL,
    expire_at TIMESTAMPTZ NOT NULL,
    user_id INT REFERENCES "user"(id)     
);

COMMIT;
