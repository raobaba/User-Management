import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
