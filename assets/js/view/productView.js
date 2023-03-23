import formTemplate from "./templates/formTemplate.js";
import productCardboxTemplate from "./templates/productTemplate.js";

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

const renderProduct = (product) => {
  document
    .querySelector(".create__product")
    .append(formTemplate("edit", product));
};

export const productView = {
  loadProductFormCreate,
  renderlistIndex,
  renderListCategory,
  renderProduct,
  renderAllProducts,
};
