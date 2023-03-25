import { model } from "../model/productsModel.js";
import { productView } from "../view/productView.js";

const listAllProducts = async (isEditable) => {
  const productList = await model.getAllProducts();
  productView.renderlistIndex(productList, isEditable);
};

const listEditAllProducts = async (isEditable) => {
  const productList = await model.getAllProducts();
  productView.renderAllProducts(productList, isEditable);
};

const loadProductsByCategory = async (isEditable) => {
  const productList = await model.getAllProducts();

  const url = new URL(window.location);
  const category = url.searchParams.get("category");

  productView.renderListCategory(productList, category, isEditable);
};

const loadSingleProduct = async () => {
  const url = new URL(window.location);

  const id = url.searchParams.get("productId");

  const productData = await model.getProduct(id);

  productView.renderSingleProduct(productData);
};

const createProduct = async (e) => {
  try {
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
      id: uuid.v4(),
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

const getProductData = async () => {
  const url = new URL(window.location);

  const product_id = url.searchParams.get("product_id");

  const product = await model.getProduct(product_id);

  productView.renderEditProductForm(product);
};

const delProduct = async (productId) => model.deleteProduct(productId);

const searchProduct = async (isEditable) => {
  const keyword = document.querySelector("[data-search").value;
  const data = await model.getAllProducts();

  if (keyword !== "") {
    const result = data.filter((item) =>
      Object.values(item).join("").includes(keyword.replace(" ", ""))
    );
    productView.renderSearchProducts(result, isEditable);
  } else {
    document
      .querySelectorAll(".products")
      .forEach((element) => (element.style.display = "block"));
   document.querySelector(".section__results").remove();
    }
};



export const productsController = {
  listAllProducts,
  listEditAllProducts,
  loadProductsByCategory,
  loadSingleProduct,
  searchProduct,
  createProduct,
  getProductData,
  delProduct,
};
