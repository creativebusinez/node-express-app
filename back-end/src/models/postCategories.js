const pool = require('../config/dbConfig');

const getPostCategories = async () => await pool.query('SELECT * FROM post_categories');
const createPostCategory = async (postId, categoryId) => await pool.query('INSERT INTO post_categories (post_id, category_id) VALUES ($1, $2) RETURNING *', [postId, categoryId]);
const deletePostCategory = async (id) => await pool.query('DELETE FROM post_categories WHERE id = $1', [id]);

module.exports = { getPostCategories, createPostCategory, deletePostCategory };
