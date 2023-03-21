import { makeRequest } from "../service/productService.js";
import formTemplate from "../view/formTemplate.js";

const loadFormCreate = () => {
  document.querySelector(".create__product").append(formTemplate("create"));
};

const getData = async (e) => {
  try {
    e.preventDefault();

    const imgUrl = document.querySelector("[data-image-url]").value;
    const imgAlt = document.querySelector("[data-image-alt]").value;
    const productTitle = document.querySelector(
      "[data-category-product]"
    ).value;
    const productCategory = document.querySelector("[data-product-name]").value;
    const productPrice = document.querySelector("[data-product-price]").value;
    const productDescription = document.querySelector(
      "[data-product-description]"
    ).value;

    if (
      await makeRequest.createProduct(
        imgUrl,
        imgAlt,
        productTitle,
        productCategory,
        productPrice,
        productDescription
      )
    ) {
      console.log("producto creado");
    }
  } catch (error) {
    console.log(error)
  }
};

export { loadFormCreate, getData };
