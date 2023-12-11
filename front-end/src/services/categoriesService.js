// src/services/categoriesService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust this base URL to your back-end server

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Add more functions if you need to fetch posts by category or other category-related operations
