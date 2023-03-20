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

const createProduct = async (
  imgUrl,
  productTitle,
  productPrice,
  productLink,
  productDescription
) => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid.v4(),
        imgUrl,
        productTitle,
        productPrice,
        productLink,
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

const deleteProduct = async (productId) => {
  try {
    return await fetch(`http:://localhost:3000/products/${productId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (productId) => {
  try {
    const response = fetch(`http://localhost:3000/products/${productId}`);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (
  productId,
  imgUrl,
  productTitle,
  productPrice,
  productLink,
  productDescription
) => {
  try {
    return await fetch(`http://localhost:3000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgUrl,
        productTitle,
        productPrice,
        productLink,
        productDescription,
      }),
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
    updateProduct
}
