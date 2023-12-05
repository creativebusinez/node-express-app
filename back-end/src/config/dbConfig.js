const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

console.log("DB User:", process.env.DB_USER);
console.log("DB Password:", process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;
