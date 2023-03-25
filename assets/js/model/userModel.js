import { makeRequest } from "../service/userService.js";

const sendMessage = async (data) => await makeRequest.createMessage(data);

export default sendMessage;