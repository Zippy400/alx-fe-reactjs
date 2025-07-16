import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}

export default ProfilePage;

import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}

export default UserInfo;


import React, { useContext } from 'react';
import UserContext from './context/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;



