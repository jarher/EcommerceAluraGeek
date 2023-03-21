import footerTemplate from "./view/footerTemplate.js";
import formTemplate from "./view/formTemplate.js";
import menuTemplate from "./view/menuTemplate.js";
import productCardboxTemplate from "./view/productTemplate.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").prepend(menuTemplate(false));
  document.querySelectorAll(".products__cards").forEach((productWrapper) => {
    productWrapper.appendChild(productCardboxTemplate(false));
  });
  document.querySelector("footer").innerHTML = footerTemplate();
  document.querySelector(".create__product").append(formTemplate("admin"));
});
