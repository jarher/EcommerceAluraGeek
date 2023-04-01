import { userModel } from "../model/userModel.js";

const login = async () => {
  const data = await userModel.getAllUser();
  let user;
  document.querySelector("[data-login-email]").addEventListener("blur", (e) => {
    
    user = data.filter((data) => data.userEmail === e.target.value)[0];

    if (user) {
      document
        .querySelector("[data-login-password]")
        .removeAttribute("disabled");
      document
        .querySelector("[data-login-password]")
        .setAttribute("pattern", user.userPassword);
    } else {
      document.querySelector("[data-login-password]").setAttribute("disabled","");
      e.target.setCustomValidity("Error");
    }
  });

  document.querySelector("[data-login-password]").addEventListener("blur", (e) => {
    if(e.target.validity.valid){
      document.querySelector(".form__button").removeAttribute("disabled");
    }
  });
  
};

export const loginController = {
  login,
};
