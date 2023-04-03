import { makeRequest } from "../service/userService.js";

const sendMessage = async (data) => await makeRequest.createMessage(data);

const getUser = async (id) => await makeRequest.getUserData(id);

const getAllUser = async () => await makeRequest.getUsers();

const updateUser = async (data, id) => await makeRequest.updateUser(data, id); 

export const userModel = {
  sendMessage,
  getAllUser,
  getUser,
  updateUser
};
