// front-end/src/pages/TestPosts.js

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postsService';

const TestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li> // Adjust based on your post object structure
        ))}
      </ul>
    </div>
  );
};

export default TestPosts;
