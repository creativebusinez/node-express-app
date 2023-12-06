const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const postCategoriesRoutes = require('./routes/postCategoriesRoutes');
const authRoutes = require('./routes/authRoutes'); // Adjust the path as needed

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

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
// Add a catch-all route for unmatched routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Handling 500 - Internal Server Error
// app.use((error, req, res, next) => {
//     console.error(error.stack);
//     res.status(500).send('Something broke!');
// });

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(statusCode).json({ message, data });
});


module.exports = app;
