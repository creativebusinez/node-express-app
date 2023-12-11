// front-end/src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <p>Discover the latest posts, insights, and stories from our community.</p>
      <Link to="/blog" className="btn">Explore Posts</Link>
      {/* Additional content can be added here, like featured posts, categories, etc. */}
    </div>
  );
};

export default HomePage;
