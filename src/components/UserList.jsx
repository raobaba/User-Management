import React from "react";

const UserList = ({ users, onEdit, onDelete, onViewDetails }) => {
  return (
    <div className="p-6 overflow-x-auto bg-gray-100 rounded-lg shadow-lg">
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users available</p>
      ) : (
        <table className="min-w-full border-separate border-spacing-0 border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border-b border-gray-300 pl-5 p-4 text-left">Photo</th>
              <th className="border-b border-gray-300 p-4 pl-20 text-left">Name</th>
              <th className="border-b border-gray-300 p-4 pl-28 text-left">Email</th>
              <th className="border-b border-gray-300 p-4 text-left">Department</th>
              <th className="border-b border-gray-300 p-4 pl-32 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50">
                <td className="border-b border-gray-300 p-4 text-center">
                  <img
                    src={user.photo || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mx-auto shadow-md"
                  />
                </td>
                <td className="border-b border-gray-300 p-4">
                  {user.firstName || user.name} {user.lastName}
                </td>
                <td className="border-b border-gray-300 p-4">{user.email}</td>
                <td className="border-b border-gray-300 p-4">{user.department}</td>
                <td className="border-b border-gray-300 p-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                      onClick={() => onEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                      onClick={() => onViewDetails(user)}
                    >
                      Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
