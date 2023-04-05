import { adminController } from "./controller/adminController.js";
import footerSubmit from "./controller/footerController.js";
import { loginController } from "./controller/loginController.js";
import { productsController } from "./controller/productsController.js";
import { registerController } from "./controller/registerController.js";
import { userController } from "./controller/userController.js";
import validateForms from "./controller/validateForms.js";
import { userModel } from "./model/userModel.js";
import { loginView } from "./view/loginView.js";
import { mainModulesView } from "./view/mainModulesView.js";
import { productView } from "./view/productView.js";
import { adminMenuTemplate } from "./view/templates/adminMenuTemplate.js";

const adminState = adminController.getAdminState();
const userState = userController.getUserState();
let isEditable = false;

const location = new URL(window.location);
let pathname = location.pathname.replace("/", "").split("?")[0];

const redirect = (url) => (window.location.href = url);

// carga modulos principales y renderiza los productos de la página index

mainModulesView.loadMenu({ adminState, userState });
mainModulesView.loadFooter();

if (pathname === "productos.html") {
  productsController.loadProductsByCategory(isEditable);
} else if (pathname === "producto.html") {
  productsController.loadSingleProduct();
} else if (pathname === "login.html") {
  if (adminState) {
    redirect("editar-productos.html");
  }
  if (userState && userState.state) {
    redirect("index.html");
  }
  loginView.loadLoginForm();
  loginController.login();
} else if (pathname === "crear-producto.html") {
  if (adminState) {
    productView.loadProductFormCreate();
    document.querySelector(".form__button").setAttribute("disabled", "");
  } else {
    redirect("index.html");
  }
} else if (pathname === "editar-productos.html") {
  if (adminState) {
    productsController.listEditAllProducts(!isEditable);
  } else {
    redirect("index.html");
  }
} else if (pathname === "editar-producto.html") {
  if (adminState) {
    productsController.getProductData();
  } else {
    redirect("index.html");
  }
} else if (pathname === "confirmacion.html") {
  const location = new URL(window.location);
  const params = location.searchParams.get("message");
  document.querySelector(".message__content").textContent = params;
} else {
  productsController.listAllProducts(isEditable);
}
// si el administrador y usuario no está logeado guarda el estado como false
if (adminState === null && userState === null) {
  adminController.setAdminState();
  userController.setUserState(false);
}

document.addEventListener("click", async (e) => {
  const datatype = e.target.dataset.type;

  if (datatype === "create-form") {
    redirect("crear-producto.html");
  }
  if (datatype === "create-product") {
    e.preventDefault();
    productsController.createProduct();
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
    const data = await userModel.getAllUser();
    const inputEmail = document.querySelector("[data-login-email]").value;
    const inputPassword = document.querySelector("[data-login-password]").value;

    const user = data.filter(
      (item) =>
        item.userEmail === inputEmail && item.userPassword === inputPassword
    )[0];

    if (user.isAdmin) {
      adminController.setAdminState(true);
      redirect("editar-productos.html");
    } else {
      userController.setUserState(user.id, true);
      redirect("index.html");
    }
  }
  if (datatype === "registerSubmit") {
    registerController.register();
    redirect("login.html");
  }
  if (datatype === "messageSubmit") {
    let message;
    if ((await footerSubmit()) === 201) {
      message = "mensaje enviado exitosamente";
    } else {
      message = "hubo un error inesperado, inténtelo de nuevo más tarde";
    }
    window.location.href = `confirmacion.html?message=${message}`;
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
  if (datatype === "menuUser") {
    const userMenu = document.querySelector(".menu__user-cart");
    if (userMenu) {
      closeMenu(userMenu);
    } else {
      userController.loadUserMenu();
      setTimeout(
        () =>
          document.querySelector(".menu__user-cart").classList.add("opacity-1"),
        200
      );
    }
  }
  if (datatype === "addCart") {
    const url = new URL(window.location);
    const productId = url.searchParams.get("productId");
    userController.addToCart(productId, productsController.quantity);
  }
  if (datatype === "closeAdminMenu") {
    closeMenu(document.querySelector(".menu__admin-options"));
  }
  if (datatype === "logout") {
    adminController.setAdminState(false);
    userController.setUserState(null, false);
    redirect("index.html");
  }
  if (datatype === "closeModal") {
    const modal = document.querySelector(".modal");
    modal.classList.remove("opacity-1");
    setTimeout(() => modal.remove(), 500);
  }
  if (datatype === "incrementQuantity") {
    productsController.changeQuantity("increment");
  }
  if (datatype === "decrementQuantity") {
    productsController.changeQuantity("decrement");
  }
  if (datatype === "cancelPurchase") {
    userController.cancelPurchase();
  }
});

//blanqueo del contenedor de resultados de búsqueda
document.querySelector("[data-search]").addEventListener("input", (e) => {
  if (e.target.value === "") {
    productsController.resetSearch();
  }
});

const closeMenu = (element) => {
  element.classList.remove("opacity-1");
  setTimeout(() => element.remove(), 200);
};

validateForms();
