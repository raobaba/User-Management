import React from 'react';

const UserItem = ({ user, onEdit, onDelete, onViewDetails }) => {
  return (
    <div className="user-item border border-gray-300 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
      <p className="text-lg">{user.firstName || user.name } {user.lastName} ({user.email}) - {user.department}</p>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={() => onViewDetails(user)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default UserItem;
