import formTemplate from "./templates/formTemplate.js";
import productCardboxTemplate from "./templates/productTemplate.js";
import singleProductTemplate from "./templates/singleProductTemplate.js";

const loadProductFormCreate = () => {
  document
    .querySelector(".create__product")
    .append(formTemplate("create", null));
};

const renderlistIndex = (productList, isEditable) => {
  const product_cards = document.querySelectorAll(".products__cards");
  for (let productWrapper of product_cards) {
    const datatype = productWrapper.dataset.type;
    for (let index in productList) {
      if (datatype === productList[index].productCategory) {
        productWrapper.appendChild(
          productCardboxTemplate(productList[index], isEditable)
        );
      }
      if (index > 4) {
        break;
      }
    }
  }
};

const renderAllProducts = (productList, isEditable) => {
  const products_cards = document.querySelector(".products__cards");
  for (let product of productList) {
    products_cards.append(productCardboxTemplate(product, isEditable));
  }
};

const renderSearchProducts = (searchList, isEditable) => {
  const sections_container = document.querySelector(".sections__container");
  const results_container = document.createElement("section");
  results_container.setAttribute("class","section__results");

  const products_container = document.querySelectorAll(".products");
  if (searchList.length !== 0) {
    products_container.forEach((element) => (element.style.display = "none"));
    for (let product of searchList) {
      results_container.append(productCardboxTemplate(product, isEditable));
    }
    sections_container.prepend(results_container);
  } else {
    results_container.remove();
    products_container.forEach((element) => (element.style.display = "block"));
  }
};

const renderListCategory = (productList, category, isEditable) => {
  const products_cards = document.querySelector(".products__cards");
  const products_title = document.querySelector(".products__title");

  products_title.textContent = category;

  for (let product of productList) {
    if (product.productCategory === category.replace(" ", "")) {
      products_cards.append(productCardboxTemplate(product, isEditable));
    }
  }
};

const renderEditProductForm = (product) => {
  document
    .querySelector(".create__product")
    .append(formTemplate("edit", product));
};

const renderSingleProduct = (data) => {
  document.querySelector(".product").prepend(singleProductTemplate(data));
};

export const productView = {
  loadProductFormCreate,
  renderlistIndex,
  renderListCategory,
  renderEditProductForm,
  renderAllProducts,
  renderSingleProduct,
  renderSearchProducts,
};
