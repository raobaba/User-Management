import axios from "axios";

let API_URL = "https://jsonplaceholder.typicode.com/users";

const setApiUrl = (url) => {
  API_URL = url;
};

// Utility function to get the id from either id or _id
const getId = (user) => user.id || user._id;

const getUsers = () => axios.get(API_URL);
const addUser = (user) => axios.post(API_URL, user);
const editUser = (user) => axios.put(`${API_URL}/${getId(user)}`, user);
const deleteUser = (user) => axios.delete(`${API_URL}/${getId(user)}`);

export default {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  setApiUrl,
};
