const express = require('express');
const router = express.Router();
const postCategoriesController = require('../controllers/postCategoriesController');

// Route to get all post categories
router.get('/', postCategoriesController.getPostCategories);

// Route to create a new post category
router.post('/', postCategoriesController.createPostCategory);

// Route to delete a post category
router.delete('/:id', postCategoriesController.deletePostCategory);

module.exports = router;
