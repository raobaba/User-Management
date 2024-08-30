// src/services/api.js
import axios from "axios";

let API_URL = "https://jsonplaceholder.typicode.com/users"; 

const setApiUrl = (url) => {
  API_URL = url;
};

const getUsers = () => axios.get(API_URL);
const addUser = (user) => axios.post(API_URL, user);
const editUser = (user) => axios.put(`${API_URL}/${user.id}`, user);
const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  setApiUrl,
};
