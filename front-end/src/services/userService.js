// src/services/userService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust this base URL to your back-end server

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Add a function to update user profile if needed
