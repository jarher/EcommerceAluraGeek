import { model } from "../model/productsModel.js";
import loadModal from "../view/modal.js";
import { productView } from "../view/productView.js";
import { userController } from "./userController.js";

const quantity = {
  value:1
}
const listAllProducts = async (isEditable) => {
  const response = await model.getAllProducts();
  if (response instanceof Array) {
    productView.renderlistIndex(response, isEditable);
  } else {
    loadModal(response);
  }
};

const listEditAllProducts = async (isEditable) => {
  const response = await model.getAllProducts();
  if (response instanceof Array) {
    productView.renderAllProducts(response, isEditable);
  } else {
    loadModal(response);
  }
};

const loadProductsByCategory = async (isEditable) => {
  const response = await model.getAllProducts();
  const url = new URL(window.location);
  const category = url.searchParams.get("category");
  if (response instanceof Array) {
    productView.renderListCategory(response, category, isEditable);
  } else {
    loadModal(response);
  }
};

const loadSingleProduct = async (quantity) => {
  const url = new URL(window.location);

  const id = url.searchParams.get("productId");

  const responseList = await model.getAllProducts();

  const responseProduct = await model.getProduct(id);

  if (responseList instanceof Array) {
    const filterList = responseList.filter((product) => product.id !== id);

    const category = responseProduct.productCategory;

    productView.renderSingleProduct(
      responseProduct,
      userController.getUserState()
    );

    productView.renderListCategory(filterList, category, false);

  } else {
    loadModal(responseList);
  }
};

const createProduct = async () => {
  
  const imgUrl = document.querySelector("[data-image-url]").value;
  const imgAlt = document.querySelector("[data-image-alt]").value;
  const productTitle = document.querySelector("[data-product-name]").value;
  const productCategory = document.querySelector(
    "[data-category-product]"
  ).value;
  const productPrice = document.querySelector("[data-product-price]").value;
  const productDescription = document.querySelector(
    "[data-product-description]"
  ).value;

  
  const data = {
    id: uuid.v4(),
    imgUrl,
    imgAlt,
    productTitle,
    productCategory,
    productPrice,
    productDescription,
  };
  const response = await model.createProduct(data);

  if (response instanceof Array) {
    loadModal("producto creado exitosamente");
  } else {
    loadModal(response);
  }
};

const editProduct = async (e) => {
  const imgUrl = document.querySelector("[data-image-url]").value;
  const imgAlt = document.querySelector("[data-image-alt]").value;
  const productTitle = document.querySelector("[data-product-name]").value;
  const productCategory = document.querySelector(
    "[data-category-product]"
  ).value;
  const productPrice = document.querySelector("[data-product-price]").value;
  const productDescription = document.querySelector(
    "[data-product-description]"
  ).value;

  const data = {
    imgUrl,
    imgAlt,
    productTitle,
    productCategory,
    productPrice,
    productDescription,
  };
  const response = await model.updateProduct(data, e.target.dataset.id);
  if (response instanceof Array) {
    loadModal("producto editado exitosamente");
  } else {
    loadModal(response);
  }
};

const getProductData = async () => {
  const url = new URL(window.location);

  const product_id = url.searchParams.get("product_id");

  const response = await model.getProduct(product_id);

  if (response instanceof Object) {
    productView.renderEditProductForm(response);
  } else {
    loadModal(response);
  }
};

const delProduct = async (productId) => {
  response = model.deleteProduct(productId);
  if (response instanceof Array) {
    return true;
  } else {
    loadModal(response);
  }
};

const searchProduct = async (isEditable) => {
  const keyword = document.querySelector("[data-search").value;
  const response = await model.getAllProducts();

  if (response instanceof Array) {
    if (keyword !== "") {
      const result = response.filter((item) =>
        Object.values(item).join("").includes(keyword)
      );
      productView.renderSearchProducts(result, isEditable);
    } else {
      resetSearch();
    }
  } else {
    loadModal(response);
  }
};

const resetSearch = () => {
  const search_content = document.querySelector(".search__content");
  search_content.style.display = "none";
  search_content.innerHTML = "";
  document.querySelector(".sections__content").style.display = "block";
};

const changeQuantity = (value) => {
  if (value === "increment") {
    quantity.value++;
  } else {
    quantity.value <= 1 ? (quantity.value = 1) : quantity.value--;
  }
  document.querySelector(".product__quantity").textContent = quantity.value;
};

export const productsController = {
  listAllProducts,
  listEditAllProducts,
  loadProductsByCategory,
  loadSingleProduct,
  searchProduct,
  createProduct,
  editProduct,
  getProductData,
  delProduct,
  resetSearch,
  quantity,
  changeQuantity
};
