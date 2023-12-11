// src/services/commentsService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust this base URL to your back-end server

export const fetchComments = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/posts/${postId}/comments`, commentData);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

// Add more functions for updating and deleting comments as needed
