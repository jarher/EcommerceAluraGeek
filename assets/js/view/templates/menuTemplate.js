import formTemplate from "./formTemplate.js";

const menuTemplate = (login) => {
    
    const template = `<a href="index.html" class="menu__logo">
    <img src="./assets/img/Logo.png" alt="alura geek logo">
    </a>
    ${
      login
        ? '<button class="menu__login-button menu__admin-button" data-type="menuAdmin"><a data-type="menuAdmin">Menu administrador</a></button>'
        : '<button class="menu__login-button"><a href="login.html">Login</a></button>'
    }
    ${formTemplate("menu")}
    `;
    
    const nav = document.createElement("nav");
    nav.setAttribute("class", "menu");
    
    nav.innerHTML = template;
    return nav;
}

export default menuTemplate;