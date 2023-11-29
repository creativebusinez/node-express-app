const categoriesModel = require('../models/categories');

// Get all categories
const getCategories = async (req, res) => {
    try {
        const result = await categoriesModel.getCategories();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a category
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await categoriesModel.createCategory(name);
        res.json(newCategory.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await categoriesModel.deleteCategory(id);
        res.status(200).send(`Category deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getCategories, createCategory, deleteCategory };
