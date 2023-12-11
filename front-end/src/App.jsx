// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// front-end/src/pages/TestPosts.js

// import React, { useEffect, useState } from 'react';
// import { fetchPosts } from '../services/postsService';

// const TestPosts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const loadPosts = async () => {
//       try {
//         const data = await fetchPosts();
//         setPosts(data);
//       } catch (error) {
//         console.error('Failed to fetch posts:', error);
//       }
//     };

//     loadPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li> // Adjust based on your post object structure
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TestPosts;

// front-end/src/App.jsx

// front-end/src/App.jsx

// front-end/src/App.jsx

// front-end/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BlogPosts from './pages/BlogPosts';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfile';
import CategoriesPage from './pages/CategoriesPage';// src/App.jsx
import NotFoundPage from './pages/NotFoundPage'; // Adjust the path if necessary
// ... other imports ...

// ... other imports ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} /> 
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
