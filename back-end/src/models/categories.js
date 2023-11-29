const pool = require('../config/dbConfig');

const getCategories = async () => await pool.query('SELECT * FROM categories');
const createCategory = async (name) => await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
const deleteCategory = async (id) => await pool.query('DELETE FROM categories WHERE id = $1', [id]);

module.exports = { getCategories, createCategory, deleteCategory };
