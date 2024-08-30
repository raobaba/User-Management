import React, { useState, useEffect } from 'react';

const UserForm = ({ selectedUser, onAddUser, onEditUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      onEditUser(user);
    } else {
      onAddUser(user);
    }
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      department: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {selectedUser ? 'Edit User' : 'Add User'}
        </h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="flex justify-start text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="flex justify-start text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="flex justify-start text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="flex justify-start text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <input
            id="department"
            type="text"
            name="department"
            value={user.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 px-3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
        >
          {selectedUser ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
