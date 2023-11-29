const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Route to get all comments
router.get('/', commentsController.getComments);

// Route to create a new comment
router.post('/', commentsController.createComment);

// Route to delete a comment
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
