const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Route to get all posts
router.get('/', postsController.getPosts);

// Route to create a new post
router.post('/', postsController.createPost);

// Route to delete a post
router.delete('/:id', postsController.deletePost);

module.exports = router;
