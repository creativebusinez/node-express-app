// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import HomePage from './pages/HomePage';
// import BlogPosts from './pages/BlogPosts';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import UserProfile from './pages/UserProfile';
// import CategoriesPage from './pages/CategoriesPage';// src/App.jsx
// import NotFoundPage from './pages/NotFoundPage'; // Adjust the path if necessary
// // ... other imports ...

// // ... other imports ...

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/landing" element={<LandingPage />} />
//         <Route path="/" element={<HomePage />} /> 
//         <Route path="/blog" element={<BlogPosts />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//         <Route path="/categories" element={<CategoriesPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//         {/* other routes */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// modified
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BlogPosts from './pages/BlogPosts';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfile';
import CategoriesPage from './pages/CategoriesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use layout components for common structure */}
        <Route
          path="/"
          element={(
            <>
              {/* Add a common header here */}
              <Header />
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPosts />} />
              {/* ... other common routes ... */}
              {/* Add a common footer here */}
              <Footer />
            </>
          )}
        />
        {/* Routes specific to LandingPage */}
        <Route path="/landing" element={<LandingPage />} />
        {/* Routes for authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Routes for user profiles */}
        <Route path="/user/:id" element={<UserProfile />} />
        {/* Other routes */}
        <Route path="/categories" element={<CategoriesPage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
