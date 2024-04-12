import React from 'react';

const UserInfo = ({ username, age }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
};
export default UserInfo;
