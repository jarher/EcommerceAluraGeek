import { adminController } from "./controller/adminController.js";
import footerSubmit from "./controller/footerController.js";
import { productsController } from "./controller/productsController.js";
import validateForms from "./controller/validateForms.js";
import { loginView } from "./view/loginView.js";
import { mainModulesView } from "./view/mainModulesView.js";
import { productView } from "./view/productView.js";
import {
  adminButtonTemplate,
  adminMenuTemplate,
} from "./view/templates/adminMenuTemplate.js";

const loginState = adminController.getLoginState();
let isEditable = false;

const location = new URL(window.location);
let pathname = location.pathname.replace("/", "").split("?")[0];

const redirect = (url) => (window.location.href = url);

// carga modulos principales y renderiza los productos de la página index

mainModulesView.loadMenu(loginState);
mainModulesView.loadFooter();

if (pathname === "productos.html") {
  productsController.loadProductsByCategory(isEditable);
}
if (pathname === "producto.html") {
  productsController.loadSingleProduct();
}
if (pathname === "login.html") {
  if (loginState) {
    redirect("editar-productos.html");
  } else {
    loginView.loadLoginForm();
  }
  adminController.login();
}
if (pathname === "crear-producto.html") {
  if (loginState) {
    productView.loadProductFormCreate();
    document.querySelector(".menu").append(adminButtonTemplate());
  } else {
    redirect("index.html");
  }
}
if (pathname === "editar-productos.html") {
  if (loginState) {
    productsController.listEditAllProducts(!isEditable);
  } else {
    redirect("index.html");
  }
}
if (pathname === "editar-producto.html") {
  if (loginState) {
    productsController.getProductData();
  } else {
    redirect("index.html");
  }
}

productsController.listAllProducts(isEditable);

if (loginState === null) {
  adminController.setLoginState();
}

document.addEventListener("click", async (e) => {
  const datatype = e.target.dataset.type;

  if (datatype === "create-form") {
    redirect("crear-producto.html");
  }
  if (datatype === "create-product") {
    e.preventDefault();
    productsController.createProduct(e);
    redirect("editar-productos.html");
  }
  if (datatype === "search") {
    productsController.searchProduct(isEditable);
    e.preventDefault();
  }
  if (datatype === "delete") {
    productsController.delProduct(e.target.dataset.id);
    redirect("editar-productos.html");
  }
  if (datatype === "loginSubmit") {
    e.preventDefault();
    const data = await adminController.getData();
    const { userEmail, userPassword } = data[0];

    const inputEmail = document.querySelector("[data-login-email]").value;
    const inputPassword = document.querySelector("[data-login-password]").value;

    if (userEmail === inputEmail && inputPassword === userPassword) {
      adminController.setLoginState(true);
      redirect("editar-productos.html");
    }
  }
  if (datatype === "messageSubmit") {
    e.preventDefault();
    footerSubmit();
  }
  if (datatype === "menuAdmin") {
    const adminMenu = document.querySelector(".menu__admin-options");
    if (adminMenu) {
      closeMenu(adminMenu);
    } else {
      document.querySelector(".menu").append(adminMenuTemplate());
      setTimeout(
        () =>
          document
            .querySelector(".menu__admin-options")
            .classList.add("opacity-1"),
        200
      );
    }
  }
  if(datatype === "closeAdminMenu"){
    closeMenu(document.querySelector(".menu__admin-options"));
  }
  if(datatype === "logout"){
    adminController.setLoginState(false);
    redirect("index.html");
  }
});

document.querySelector("[data-search]").addEventListener("input", e => {
  if(e.target.value === ""){
    document.querySelector(".search__content").style.display = "none";
    document.querySelector(".sections__content").style.display = "block";
  }
})
const closeMenu = (element) => {
element.classList.remove("opacity-1");
setTimeout(() => element.remove(), 200);
}

validateForms();
