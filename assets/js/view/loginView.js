import formTemplate from "./templates/formTemplate.js";

const loadLoginForm = () => {
  document.querySelector(".login__container").append(formTemplate("login"));
};

export const loginView = { loadLoginForm };
