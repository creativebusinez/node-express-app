const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const usersRoutes = require('./src/routes/usersRoutes');
const postsRoutes = require('./src/routes/postsRoutes');
const commentsRoutes = require('./src/routes/commentsRoutes');
const categoriesRoutes = require('./src/routes/categoriesRoutes');
const postCategoriesRoutes = require('./src/routes/postCategoriesRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Enable CORS for all routes
app.use(cors());

// Middlewares
app.use(express.json()); // for parsing application/json

// Use auth routes
app.use('/api/auth', authRoutes);

// API Routes
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/postCategories', postCategoriesRoutes);

// Default route for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Blogging Application API!');
});

// Handling 404 - Resource Not Found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
