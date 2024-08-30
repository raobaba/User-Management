import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Pagination from './components/Pagination'; // Import Pagination component
import ErrorHandler from './utils/ErrorHandler'; // Import ErrorHandler
import api from './services/api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Users per page
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (err) {
      setError(ErrorHandler.handleApiError(err));
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await api.addUser(user);
      setUsers([...users, response.data]);
    } catch (err) {
      setError(ErrorHandler.handleApiError(err));
    }
  };

  const handleEditUser = async (user) => {
    try {
      const response = await api.editUser(user);
      const updatedUsers = users.map(u => u.id === user.id ? response.data : u);
      setUsers(updatedUsers);
    } catch (err) {
      setError(ErrorHandler.handleApiError(err));
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await api.deleteUser(id);
      const updatedUsers = users.filter(u => u.id !== id);
      setUsers(updatedUsers);
    } catch (err) {
      setError(ErrorHandler.handleApiError(err));
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>User Management</h1>
      {error && <div className="error">{error}</div>}
      <UserList users={currentUsers} onEdit={setSelectedUser} onDelete={handleDeleteUser} />
      <UserForm selectedUser={selectedUser} onAddUser={handleAddUser} onEditUser={handleEditUser} />
      <Pagination 
        usersPerPage={usersPerPage} 
        totalUsers={users.length} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default App;
