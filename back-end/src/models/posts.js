const pool = require('../config/dbConfig');

const getPosts = async () => await pool.query('SELECT * FROM posts');
const createPost = async (userId, title, content) => await pool.query('INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *', [userId, title, content]);
const deletePost = async (id) => await pool.query('DELETE FROM posts WHERE id = $1', [id]);

module.exports = { getPosts, createPost, deletePost };
