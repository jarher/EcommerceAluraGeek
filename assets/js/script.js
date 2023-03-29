import { adminController } from "./controller/adminController.js";
import footerSubmit from "./controller/footerController.js";
import { productsController } from "./controller/productsController.js";
import validateForms from "./controller/validateForms.js";
import { loginView } from "./view/loginView.js";
import { mainModulesView } from "./view/mainModulesView.js";
import { productView } from "./view/productView.js";
import { adminMenuTemplate } from "./view/templates/adminMenuTemplate.js";

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
//selección de unos pocos productos al inicio
document.querySelectorAll(".products").forEach((products) => {
  products
    .querySelectorAll(".product__card__box")
    .forEach((productBox, index) => {
      if (window_width < 1024 && index > 3) {
        productBox.remove();
      }
      if (window_width >= 1024 && index > 5) {
        productBox.remove();
      }
    });
});

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
  if (datatype === "edit-product") {
    e.preventDefault();
    productsController.editProduct(e);
    redirect("editar-productos.html");
  }
  if (datatype === "search") {
    productsController.searchProduct(isEditable);
    e.preventDefault();
  }
  if (datatype === "delete") {
    if (productsController.delProduct(e.target.dataset.id)) {
      redirect("editar-productos.html");
    }
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
    footerSubmit(e);
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
  if (datatype === "closeAdminMenu") {
    closeMenu(document.querySelector(".menu__admin-options"));
  }
  if (datatype === "logout") {
    adminController.setLoginState(false);
    redirect("index.html");
  }
  if (datatype === "closeModal") {
    const modal = document.querySelector(".modal");
    modal.classList.remove("opacity-1");
    setTimeout(() => modal.remove(), 500);
  }
});
//blanqueo del contenedor de resultados de búsqueda
document.querySelector("[data-search]").addEventListener("input", (e) => {
  if (e.target.value === "") {
    productsController.resetSearch();
  }
});

document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

const closeMenu = (element) => {
  element.classList.remove("opacity-1");
  setTimeout(() => element.remove(), 200);
};

validateForms();
