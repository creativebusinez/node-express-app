const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Route to get all categories
router.get('/', categoriesController.getCategories);

// Route to create a new category
router.post('/', categoriesController.createCategory);

// Route to delete a category
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;
