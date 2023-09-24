import React, { useState } from 'react';
import '../css/Profile.css';

const ProfileSection = () => {
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Admin',
  });

  return (
    <div className="profile-section">
      <h2 className='user-name'>{user.name}</h2>
      <p className='user-email'>{user.email}</p>
      <p className='user-role'>{user.role}</p>
    </div>
  );
};

export default ProfileSection;
