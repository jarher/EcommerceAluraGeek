import { userModel } from "../model/userModel.js";

const footerSubmit = async () => {

  const userName = document.querySelector("[data-username]").value;
  const userMessage = document.querySelector("[data-usermessage]").value;

  if (userName && userMessage) {
    const data = {
      id: uuid.v4(),
      userName,
      userMessage,
    };
    return await userModel.sendMessage(data);
  }
};

export default footerSubmit;
