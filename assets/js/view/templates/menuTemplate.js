import formTemplate from "./formTemplate.js";

const menuTemplate = ({adminState, userState}) => {
  const template = `<a href="index.html" class="menu__logo">
    <img src="./assets/img/Logo.png" alt="alura geek logo">
    </a>
    ${
      adminState ?
      '<button class="menu__login-button menu__admin-button" data-type="menuAdmin"><a data-type="menuAdmin">Menu administrador</a></button>':
      userState ?
      '<button class="menu__login-button"><span class="material-symbols-rounded">shopping_cart</span></button>':
      '<button class="menu__login-button"><a href="login.html">Login</a></button>'
    }

    ${formTemplate("menu")}
    `;

  const nav = document.createElement("nav");
  nav.setAttribute("class", "menu");

  nav.innerHTML = template;
  return nav;
};

export default menuTemplate;
