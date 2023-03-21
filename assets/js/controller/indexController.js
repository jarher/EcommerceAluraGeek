import { makeRequest } from "../service/productService.js";
import productCardboxTemplate from "../view/productTemplate.js";

const getAllProducts = async (isEditable) => {
  try {
    const productList = await makeRequest.productList();
    const product_cards_container =
      document.querySelectorAll(".products__cards");
    for(let productWrapper of product_cards_container){
      const datatype = productWrapper.dataset.type;
      for(let index in productList){
        if(datatype === productList[index].productCategory){
          productWrapper.appendChild(
            productCardboxTemplate(productList[index], isEditable)
          );
        }
        if(index > 4){
          break;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts };
