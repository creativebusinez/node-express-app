const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Route for user login
router.post('/login', authController.loginUser);

module.exports = router;
