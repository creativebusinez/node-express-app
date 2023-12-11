// front-end/src/pages/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our Blogging Platform</h1>
      <p>Explore a wide range of topics, share your thoughts, and connect with others.</p>
      <div>
        <Link to="/register" className="btn">Sign Up Now</Link>
        <Link to="/blog" className="btn">Explore Blogs</Link>
      </div>
    </div>
  );
};

export default LandingPage;
