// front-end/src/pages/CategoriesPage.js

import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/categoriesService'; // Replace with your actual service for fetching categories
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.length > 0 ? (
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>{category.name}</Link>
              {/* Link to a page showing posts in this category if implemented */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default CategoriesPage;
