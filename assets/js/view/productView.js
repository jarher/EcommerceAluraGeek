import formTemplate from "./templates/formTemplate.js";
import productCardboxTemplate from "./templates/productTemplate.js";
import singleProductTemplate from "./templates/singleProductTemplate.js";

const loadProductFormCreate = () => {
  document
    .querySelector(".create__product")
    .append(formTemplate("create", null));
};

const renderlistIndex = (productList, isEditable) => {
  let window_width = screen.availWidth;

  const product_cards = document.querySelectorAll(".products__cards");

  for (let productWrapper of product_cards) {
    const datatype = productWrapper.dataset.type;
    for (let index in productList) {
      if (datatype === productList[index].productCategory) {
        productWrapper.appendChild(
          productCardboxTemplate(productList[index], isEditable)
        );
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
  const search_content = document.querySelector(".search__content");
  const sections_content = document.querySelector(".sections__content");

  if (searchList.length !== 0) {
    sections_content.style.display = "none";
    search_content.style.display = "flex";
    for (let product of searchList) {
      search_content.append(productCardboxTemplate(product, isEditable));
    }
  } else {
    sections_content.style.display = "none";
    sections_content.style.display = "block";
  }
};

const renderListCategory = (productList, category, isEditable) => {
  const products_cards = document.querySelector(".products__cards");

  if (document.querySelector(".products__title")) {
    document.querySelector(".products__title").textContent = category;
  }

  for (let product of productList) {
    if (product.productCategory === category) {
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
