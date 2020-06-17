import { Pool } from 'pg';
import db from './index';

let queryText = `
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY, 
    "firstname" VARCHAR(40) NOT NULL,
    "lastname" VARCHAR(40) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "password" varchar(200) NOT NULL,
    "createdOn" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (
    "firstname",
    "lastname",
    "email",
    "isAdmin",
    "password"
) VALUES (
    'Josh',
     'Gregg',
    'greggsjg@gmail.com',
    'false',
    'passkeyabc123'
);
INSERT INTO users (
    "firstname",
    "lastname",
    "email",
    "isAdmin",
    "password"
) VALUES (
    'Lebron',
     'James',
    'bronjamessjg@gmail.com',
    'true',
    'passkeya12c'
);
INSERT INTO users (
    "firstname",
    "lastname",
    "email",
    "isAdmin",
    "password"
) VALUES (
    'Lakes',
     'Walsh',
    'wallylakesjg@gmail.com',
    'false',
    'passkey13dc'
);
`;

db.query(queryText)
    .then(result => console.log(result))
    .catch(error => console.log(error));