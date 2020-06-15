import { Pool } from 'pg';
import connectionString from ".";
import logger from '../services/logger'


let queryText = `
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY, 
    "firstname" VARCHAR(40) NOT NULL,
    "lastname" VARCHAR(40) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "password" varchar(200) NOT NULL
);
INSERT INTO users (
    "firstname",
    "lastname",
    "email",
    "isAdmin",
    "password"
) VALUES (
    'James',
     'Smith',
    'jamiebb@co.gmail.com',
    'false',
    'passkey123'
);
`;


const client = new Pool({ connectionString });

client.on('connect', () => {
    logger.info('CONNECTED TO DATABASE')
});

client.query(queryText)
    .then(result => console.log(result))
    .catch(error => console.log(error));