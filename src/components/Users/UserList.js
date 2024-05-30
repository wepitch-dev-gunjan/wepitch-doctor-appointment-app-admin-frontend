import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import UserItem from './UserItem';
import './UserList.scss';

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
