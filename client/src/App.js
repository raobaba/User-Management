import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Pagination from "./components/Pagination";
import UserDetailModal from "./components/UserDetailModal";
import ErrorHandler from "./utils/ErrorHandler";
import api from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import UserListSkeleton from "./components/UserListSkeleton";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUsingNodeServer, setIsUsingNodeServer] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [isUsingNodeServer]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.getUsers();
      console.log(response.data)
      setUsers(response.data);
    } catch (err) {
      const errorMessage = ErrorHandler.handleApiError(err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await api.addUser(user);
      setUsers([...users, response.data]);
      toast.success("User added successfully!");
      setIsModalOpen(false);
    } catch (err) {
      const errorMessage = ErrorHandler.handleApiError(err);
      toast.error(errorMessage);
    }
  };

  const handleEditUser = async (user) => {
    try {
      const response = await api.editUser(user);
      const updatedUsers = users.map((u) =>
        u.id === user.id ? response.data : u
      );
      setUsers(updatedUsers);
      toast.success("User updated successfully!");
      setIsModalOpen(false);
    } catch (err) {
      const errorMessage = ErrorHandler.handleApiError(err);
      toast.error(errorMessage);
    }
  };

  const handleDeleteUser = async (id) => {
    
    try {
      await api.deleteUser(id);
      const updatedUsers = users.filter((u) => u.id !== id);
      setUsers(updatedUsers);
      toast.success("User deleted successfully!");
    } catch (err) {
      const errorMessage = ErrorHandler.handleApiError(err);
      toast.error(errorMessage);
    }
  };

  const handleOpenModal = (user = null) => {
    setSelectedUser(user);
    setIsEditing(!!user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleOpenDetailModal = (user) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedUser(null);
    setIsDetailModalOpen(false);
  };

  const toggleServer = () => {
    if (isUsingNodeServer) {
      window.location.reload();
    } else {
      api.setApiUrl("https://server-side-kvyh.onrender.com/api/v1/users"); 
    }
    setIsUsingNodeServer(!isUsingNodeServer);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          User Management
        </h1>
        <div className="w-full flex justify-between">
          <button
            className="bg-blue-500 text-white px-6 py-3 ml-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            onClick={toggleServer}
          >
            {isUsingNodeServer
              ? "Connect with JSONPlaceholder"
              : "Connect With Node Server"}
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 mr-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleOpenModal()}
          >
            Add User
          </button>
        </div>
      </div>

      {error && <div className="error text-red-500 mb-4">{error}</div>}

      {loading ? (
        <UserListSkeleton rowCount={usersPerPage} />
      ) : (
        <>
          <UserList
            users={currentUsers}
            onEdit={(user) => handleOpenModal(user)}
            onDelete={handleDeleteUser}
            onViewDetails={handleOpenDetailModal}
          />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserForm
          selectedUser={selectedUser}
          onAddUser={handleAddUser}
          onEditUser={handleEditUser}
        />
      </Modal>
      <UserDetailModal
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        user={selectedUser}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
