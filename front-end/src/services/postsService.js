// front-end/src/services/postsService.js

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/posts'; // Adjust as needed

// // Fetch all posts
// export const fetchPosts = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };

// // Fetch a single post by ID
// export const fetchPostById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching post:', error);
//     throw error;
//   }
// };

// // Add a new post
// export const addPost = async (postData) => {
//   try {
//     const response = await axios.post(API_URL, postData);
//     return response.data;
//   } catch (error) {
//     console.error('Error adding post:', error);
//     throw error;
//   }
// };

// // Update a post
// export const updatePost = async (id, updatedData) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, updatedData);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating post:', error);
//     throw error;
//   }
// };

// // Delete a post
// export const deletePost = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting post:', error);
//     throw error;
//   }
// };


// alt front-end/src/services/postsService.js

// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api'; // Adjust to match your back-end URL

// export const getPosts = async () => {
//   return axios.get(`${API_BASE_URL}/posts`);
// };

// export const getPostById = async (postId) => {
//   return axios.get(`${API_BASE_URL}/posts/${postId}`);
// };

// export const createPost = async (postData) => {
//   return axios.post(`${API_BASE_URL}/posts`, postData);
// };

// export const updatePost = async (postId, postData) => {
//   return axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
// };

// export const deletePost = async (postId) => {
//   return axios.delete(`${API_BASE_URL}/posts/${postId}`);
// };

// src/services/postsService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust this base URL to your back-end server

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const addPost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, postData);
    return response.data;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

// Add more functions for updating and deleting posts as needed
