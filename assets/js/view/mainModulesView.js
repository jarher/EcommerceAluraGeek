import footerTemplate from "./templates/footerTemplate.js";
import menuTemplate from "./templates/menuTemplate.js";

const loadMenu = (state) => {
  document.querySelector("body").prepend(menuTemplate(state));
};

const loadFooter = () => {
  document.querySelector("footer").innerHTML = footerTemplate();
};

export const maniModulesView = { loadMenu, loadFooter };
