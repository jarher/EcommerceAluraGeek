import { getData, loadFormCreate } from "./controller/createController.js";
import { getAllProducts } from "./controller/indexController.js";
import { loadFooter, loadMenu } from "./controller/loadMainModules.js";
import { loadLoginForm } from "./controller/loginController.js";
import { loadProductsByCategory } from "./controller/productsController.js";
import formTemplate from "./view/formTemplate.js";

document.addEventListener("DOMContentLoaded", () => {
  loadMenu(false);
  loadFooter();
  // loadLoginForm();
  // loadFormCreate();
  getAllProducts(true);
  
  // document.querySelector(".create__product").append(formTemplate("admin"));
});

loadProductsByCategory();

document.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  if(dataset.type === "create-product"){
    getData(e);
  }
})