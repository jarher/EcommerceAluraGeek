import { userController } from "./userController.js";

const register = () => {
    
  const userEmail = document.querySelector("[data-register-email]").value;
  const userPassword = document.querySelector("[data-register-password]").value;

  userController.createUser(userEmail, userPassword);
};

export const registerController = {
  register,
};
