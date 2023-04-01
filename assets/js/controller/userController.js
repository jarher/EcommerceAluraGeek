import { userModel } from "../model/userModel.js";
import renderUserCard from "../view/templates/userCartTemplate.js";

const setUserState = (value) =>
  localStorage.setItem("userLogin", value || JSON.stringify(false));

const getUserState = () => JSON.parse(localStorage.getItem("userLogin"));

const getUserProducts = (id) => {
  const userData = userModel.getUser(id);
  const userProducts = userData.products;
  let total = userProducts
    .map((product) => {
      product.productPrice;
    })
    .reduce((acc, value) => acc + value, 0);

  renderUserCard(userData, total);
};

export const userController = {
  setUserState,
  getUserState,
  getUserProducts
};