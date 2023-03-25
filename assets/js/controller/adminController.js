import adminData from "../model/adminModel.js";

const login = async () => {
  const inputEmail = document.querySelector("[data-login-email]");
  const inputPassword = document.querySelector("[data-login-password]");

  const data = await getData();
  const { userEmail, userPassword } = data[0];

  inputEmail.setAttribute("pattern", userEmail);
  inputPassword.setAttribute("pattern", userPassword);

};

const getData = async () => await adminData();

const setLoginState = (value) => localStorage.setItem("login",value || JSON.stringify(false));

const getLoginState = () => JSON.parse(localStorage.getItem("login"));

export const adminController = {
  login,
  getData,
  setLoginState,
  getLoginState
};
