const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to get all users
router.get('/', usersController.getUsers);

// Route to create a new user
router.post('/', usersController.createUser);

// Route to delete a user
router.delete('/:id', usersController.deleteUser);

module.exports = router;
