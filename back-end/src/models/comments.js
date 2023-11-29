const pool = require('../config/dbConfig');

const getComments = async () => await pool.query('SELECT * FROM comments');
const createComment = async (postId, userId, comment) => await pool.query('INSERT INTO comments (post_id, user_id, comment) VALUES ($1, $2, $3) RETURNING *', [postId, userId, comment]);
const deleteComment = async (id) => await pool.query('DELETE FROM comments WHERE id = $1', [id]);

module.exports = { getComments, createComment, deleteComment };
