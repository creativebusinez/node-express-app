const bcrypt = require('bcrypt');
const pool = require('../config/dbConfig');

const getUsers = async () => await pool.query('SELECT * FROM users');
// Create a user with a hashed password
const createUser = async (username, email, password) => {
    const hashedPassword = await hashPassword(password);
    return await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );
};
// Retrieve a user by email
const getUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};
const deleteUser = async (id) => await pool.query('DELETE FROM users WHERE id = $1', [id]);

module.exports = { getUsers, createUser, deleteUser, getUserByEmail };
