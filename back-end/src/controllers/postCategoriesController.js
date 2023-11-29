const postCategoriesModel = require('../models/postCategories');

// Get all post categories
const getPostCategories = async (req, res) => {
    try {
        const result = await postCategoriesModel.getPostCategories();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a post category
const createPostCategory = async (req, res) => {
    try {
        const { postId, categoryId } = req.body;
        const newPostCategory = await postCategoriesModel.createPostCategory(postId, categoryId);
        res.json(newPostCategory.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a post category
const deletePostCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await postCategoriesModel.deletePostCategory(id);
        res.status(200).send(`Post Category deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getPostCategories, createPostCategory, deletePostCategory };
