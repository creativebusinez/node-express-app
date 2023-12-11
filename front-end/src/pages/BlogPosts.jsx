// front-end/src/pages/BlogPosts.js

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postsService';

const BlogPosts = () => {
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
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>{post.content}</p> {/* Adjust based on your post object */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default BlogPosts;
