import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item">
      <p>{user.firstName} {user.lastName} ({user.email}) - {user.department}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
