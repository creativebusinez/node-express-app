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
import BlogPosts from './pages/BlogPosts';
// ... other imports ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogPosts />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
