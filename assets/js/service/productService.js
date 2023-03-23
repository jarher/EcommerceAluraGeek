const productList = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async ({
  imgUrl,
  imgAlt,
  productTitle,
  productCategory,
  productPrice,
  productDescription,
}) => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: uuid.v4(),
        imgUrl,
        imgAlt,
        productTitle,
        productCategory,
        productPrice,
        productDescription,
      }),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (productId) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async ({
  productId,
  imgUrl,
  imgAlt,
  productCategory,
  productTitle,
  productPrice,
  productDescription,
}) => {
  try {
    return await fetch(`http://localhost:3000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgUrl,
        imgAlt,
        productCategory,
        productTitle,
        productPrice,
        productDescription,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    return await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
export const makeRequest = {
  productList,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
};
