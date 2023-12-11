// front-end/src/pages/UserProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../services/userService'; // Replace with your actual user profile service

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Get user ID from URL parameters

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await getUserProfile(id);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Display additional user information here */}
    </div>
  );
};

export default UserProfile;
