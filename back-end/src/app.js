const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const postCategoriesRoutes = require('./routes/postCategoriesRoutes');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(express.json()); // for parsing application/json

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
    res.status(404).send('We think you are lost!');
});

// Handling 500 - Internal Server Error
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
