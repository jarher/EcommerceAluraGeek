import { model } from "../model/productsModel.js";
import { userModel } from "../model/userModel.js";
import renderUserCart from "../view/templates/userCartTemplate.js";
import renderUserCard from "../view/templates/userCartTemplate.js";

const setUserState = (id, value) =>
  localStorage.setItem(
    "userLogin",
    value
      ? JSON.stringify({ state: value, id: id })
      : JSON.stringify({ state: false, id: null })
  );

const getUserState = () => JSON.parse(localStorage.getItem("userLogin"));

const createUser = async (userEmail, userPassword) => {
  const data = {
    id: uuid.v4(),
    userEmail,
    userPassword,
    products: [],
    isAdmin: false,
  };
  await userModel.createUser(data);
}
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

const addToCart = async (productId, quantity) => {
  const userId = getUserState().id;
  const product = await model.getProduct(productId);
  const user = await userModel.getUser(userId);
  product.quantity = quantity.value;
  user.products.push(product);
  userModel.updateUser(user, userId);
  quantity.value = 1;
};

const loadUserMenu = async () => {
  const userId = getUserState().id;
  const user = await userModel.getUser(userId);
  const subtotal = user.products.map(
    (item) => item.productPrice * item.quantity
  );
  const total = subtotal.reduce((acc, current) => acc + current, 0);
  return renderUserCart(user, total);
};

const cancelPurchase = async () => {
  const userId = getUserState().id;
  const user = await userModel.getUser(userId);
  user.products = [];
  userModel.updateUser(user, userId);
};

export const userController = {
  setUserState,
  getUserState,
  getUserProducts,
  addToCart,
  loadUserMenu,
  cancelPurchase,
  createUser
};
