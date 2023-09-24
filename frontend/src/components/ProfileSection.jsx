import React, { useState } from 'react';
import '../css/Profile.css';

import avatar from '../images/avatar.png';

const ProfileSection = () => {
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Admin',
  });

  return (
    <div className="profile-section">
      <div>
        <hr className='profile-hr'/>
        <img className='pro-avatar' src={avatar} alt="Avatar" width="150px" height="100px"/>
        <hr className='profile-hr'/>
        <h3 className='profile-welcome-note'>Welcome,</h3>
        <h2 className='user-name'>{user.name}</h2>
        <p className='user-email'>{user.email}</p>
        <p className='user-role'>{user.role}</p>
        <hr className='profile-hr'/>
        <button type="button" class="btn btn-outline-primary">Update Profile</button>
         <br/>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <hr className='profile-hr'/>
      </div>
    </div>
  );
};

export default ProfileSection;
