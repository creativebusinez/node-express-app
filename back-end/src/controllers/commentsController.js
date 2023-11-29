const commentsModel = require('../models/comments');

// Get all comments
const getComments = async (req, res) => {
    try {
        const result = await commentsModel.getComments();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a comment
const createComment = async (req, res) => {
    try {
        const { postId, userId, comment } = req.body;
        const newComment = await commentsModel.createComment(postId, userId, comment);
        res.json(newComment.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await commentsModel.deleteComment(id);
        res.status(200).send(`Comment deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getComments, createComment, deleteComment };
