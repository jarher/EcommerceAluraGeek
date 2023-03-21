import footerTemplate from "../view/footerTemplate.js";
import menuTemplate from "../view/menuTemplate.js";

const loadMenu = (state) => {
    document.querySelector("body").prepend(menuTemplate(state));
}

const loadFooter = () => {
    document.querySelector("footer").innerHTML = footerTemplate();
};

export {
    loadMenu,
    loadFooter
}