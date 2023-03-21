import formTemplate from "../view/formTemplate.js";

const loadLoginForm = () => {
    document.querySelector(".login__container").append(formTemplate("login"));
}

export {
    loadLoginForm
}