import { makeRequest } from "../service/productService.js";
import productCardboxTemplate from "../view/productTemplate.js";

const loadProductsByCategory = () => {
  document.addEventListener("DOMContentLoaded", load());
};

const load = async () => {
  try {
    const products_container = document.querySelector(".products");
    const products_title = products_container.querySelector(".products__title");
    const products_cards = products_container.querySelector(".products__cards");

    const url = new URL(window.location);
    const category = url.searchParams.get("category");
    const productList = await makeRequest.productList();

    products_title.textContent = category;
    console.log(category.replace("-", " "));
    for (let product of productList) {
      if (product.productCategory === category.replace("-", "")) {
        products_cards.append(productCardboxTemplate(product));
      }
    }
    // productList.foreach((product) => {
    //   if (product.category === category.replace("-", " ")) {
    //     products_cards.append(productCardboxTemplate(product));
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
};
export { loadProductsByCategory };
