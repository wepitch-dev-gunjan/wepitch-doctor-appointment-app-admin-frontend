import React from 'react';
import './UserItem.scss';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <h3>{user.firstName} {user.lastName}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default UserItem;
