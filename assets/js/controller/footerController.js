import sendMessage from "../model/userModel.js";
import loadModal from "../view/modal.js";

const footerSubmit = async (e) => {
  e.preventDefault();
  const userName = document.querySelector("[data-username]").value;
  const userMessage = document.querySelector("[data-usermessage]").value;

  if (userName && userMessage) {
    const data = {
      id: uuid.v4(),
      userName,
      userMessage,
    };
    const response = await sendMessage(data);
    loadModal(response);
  }
};

export default footerSubmit;
