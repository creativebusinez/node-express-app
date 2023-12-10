import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header'; // Assuming you have a Header component
import Footer from './components/layout/Footer'; // Assuming you have a Footer component
import Home from './pages/Home'; // Home page component
import Blog from './pages/Blog'; // Blog page component
import About from './pages/About'; // About page component
import Contact from './pages/Contact'; // Contact page component
import './App.css'; // Main stylesheet (modify as needed)

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Site header */}
        <main>
          <Switch>
            {/* Define routes for different pages */}
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* You can add more routes here as needed */}
          </Switch>
        </main>
        <Footer /> {/* Site footer */}
      </div>
    </Router>
  );
}

export default App;














// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Welcome to My React Blogging Platform</h1>
//       <p>This is a test to ensure React is working correctly.</p>
//     </div>
//   );
// }

// export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
    
//       </header>
//     </div>
    
//   );
// }

// export default App;
