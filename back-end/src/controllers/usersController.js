const usersModel = require('../models/users');

// Get all users
const getUsers = async (req, res) => {
    try {
        const result = await usersModel.getUsers();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a user
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await usersModel.createUser(username, email, password);
        res.json(newUser.rows[0]);
        const { password: _, ...userData } = newUser.rows[0];
        res.json(userData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await usersModel.deleteUser(id);
        res.status(200).send(`User deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getUsers, createUser, deleteUser };
