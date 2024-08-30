import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete, onViewDetails }) => {
  return (
    <div className="p-4 space-y-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users available</p>
      ) : (
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
            onViewDetails={onViewDetails}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
