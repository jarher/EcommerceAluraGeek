import { adminController } from "./controller/adminController.js";
import footerSubmit from "./controller/footerController.js";
import { productsController } from "./controller/productsController.js";
import validateForms from "./controller/validateForms.js";
import { loginView } from "./view/loginView.js";
import { mainModulesView } from "./view/mainModulesView.js";
import { productView } from "./view/productView.js";
// import header from "./view/templates/header.js";

const loginState = adminController.getLoginState();
let isEditable = false;

const location = new URL(window.location);
let pathname = location.pathname.replace("/", "").split("?")[0];

const redirect = (url) => (window.location.href = url);

// document.querySelector("html").prepend(header());

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
// carga modulos principales y renderiza los productos de la página index 
mainModulesView.loadMenu(loginState);
mainModulesView.loadFooter();
productsController.listAllProducts(isEditable);


if (loginState === null) {
  adminController.setLoginState();
}

document.addEventListener("click", async (e) => {
  const dataset = e.target.dataset;

  if (dataset.type === "create-form") {
    redirect("crear-producto.html");
  }
  if (dataset.type === "create-product") {
    e.preventDefault();
    productsController.createProduct(e);
  }
  if (dataset.type === "search") {
    productsController.searchProduct(isEditable);
    e.preventDefault();
  }
  if (dataset.type === "delete") {
    productsController.delProduct(dataset.id);
    redirect("editar-productos.html");
  }
  if (dataset.type === "loginSubmit") {
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
  if(dataset.type === "messageSubmit"){
    e.preventDefault();
    footerSubmit();
  }
});

validateForms();