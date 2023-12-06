const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usersModel = require('../models/users');

// Function to hash passwords
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

// Function to validate password
async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}


// Login User
const loginUser = async (req, res) => {
    try {
        console.log ("Login route hit");
        const { email, password } = req.body;
        const user = await usersModel.getUserByEmail(email);

        if (!user) return res.status(401).json({ error: 'User does not exist' });

        const validPassword = await validatePassword(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Password is incorrect' });

        // Generate JWT token
        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({
            data: { email: user.email },
            accessToken
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { loginUser, hashPassword };
