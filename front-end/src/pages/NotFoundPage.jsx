// front-end/src/pages/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>You can always go back to the <Link to="/">homepage</Link>.</p>
    </div>
  );
};

export default NotFoundPage;
