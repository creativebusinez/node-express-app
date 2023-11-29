const pool = require('../config/dbConfig');

const getUsers = async () => await pool.query('SELECT * FROM users');
const createUser = async (username, email, password) => await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
const deleteUser = async (id) => await pool.query('DELETE FROM users WHERE id = $1', [id]);

module.exports = { getUsers, createUser, deleteUser };
