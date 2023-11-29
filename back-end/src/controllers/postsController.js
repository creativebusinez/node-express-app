const postsModel = require('../models/posts');

// Get all posts
const getPosts = async (req, res) => {
    try {
        const result = await postsModel.getPosts();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a post
const createPost = async (req, res) => {
    try {
        const { userId, title, content } = req.body;
        const newPost = await postsModel.createPost(userId, title, content);
        res.json(newPost.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await postsModel.deletePost(id);
        res.status(200).send(`Post deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getPosts, createPost, deletePost };
