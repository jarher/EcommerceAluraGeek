import { model } from "../model/productsModel.js";
import { productView } from "../view/productView.js";

const listAllProducts = async (isEditable) => {
  const productList = await model.getAllProducts();
  productView.renderlistIndex(productList, isEditable);
};

const listEditAllProducts = async (isEditable) => {
  const productList = await model.getAllProducts();
  productView.renderAllProducts(productList, isEditable);
}

const loadProductsByCategory = async (isEditable) => {

  const productList = await model.getAllProducts();

  const url = new URL(window.location);
  const category = url.searchParams.get("category");

  productView.renderListCategory(productList, category, isEditable);

};

const createProduct = async () => {
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

    const data = {
      imgUrl,
      imgAlt,
      productTitle,
      productCategory,
      productPrice,
      productDescription,
    };
    if (await model.createProduct(data)) {
      console.log("producto creado");
    }
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async () => {
  const url = new URL(window.location);
   
  const product_id = url.searchParams.get("product_id");
 
  const product = await model.getProduct(product_id);
  
  productView.renderProduct(product);
};

const delProduct = async (productId) => model.deleteProduct(productId);

export const productsController = {
  listAllProducts,
  listEditAllProducts,
  loadProductsByCategory,
  createProduct,
  getProduct,
  delProduct,
};
