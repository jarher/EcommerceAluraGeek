import { productsController } from "./controller/productsController.js";
import { loginView } from "./view/loginView.js";
import { maniModulesView } from "./view/mainModulesView.js";
import { productView } from "./view/productView.js";

let isEditable = false;
let loginState = false;

document.addEventListener("DOMContentLoaded", () => {
  const location = new URL(window.location);
  let pathname = location.pathname.replace("/", "").split("?")[0];
 
  if (pathname === "productos.html") {
    productsController.loadProductsByCategory(isEditable);
  }
  if (pathname === "login.html") {
    loginView.loadLoginForm();
  }
  if (pathname === "crear-producto.html") {
    productView.loadProductFormCreate();
  }
  if (pathname === "editar-productos.html") {
    isEditable = true;
    productsController.listEditAllProducts(isEditable);
  }
  if(pathname === "editar-producto.html"){
    productsController.getProduct();
  }
  maniModulesView.loadMenu(loginState);
  maniModulesView.loadFooter();
  productsController.listAllProducts(isEditable);
});

document.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  
  if(dataset.type === "create-form"){
    window.location.href = "crear-producto.html";
  }
  if (dataset.type === "create-product") {
    sendData(e);
  }
  if(dataset.type === "delete"){
    productsController.delProduct(dataset.id);
  }
});
