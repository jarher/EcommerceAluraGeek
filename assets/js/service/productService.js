const productList = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (response) {
      return response.json();
    }
  } catch (error) {
    return 'hubo un error inesperado, inténtelo más tarde';
  }
};

const createProduct = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    return "Ocurrió un error al crear el producto, inténtalo más tarde";
  }
};

const getProduct = async (productId) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    
    if (response) {
      return response.json();
    }
  } catch (error) {
    return "Ocurrió un error al obtener el producto. Inténtelo de nuevo más tarde";
  }
};

const updateProduct = async ({
  imgUrl,
  imgAlt,
  productCategory,
  productTitle,
  productPrice,
  productDescription,
}, id) => {
  try {
    console.log(id)
    return await fetch(`http://localhost:3000/products/${id}`, {
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
    return "Hubo un error al actualizar los datos. Inténtelo de nuevo más tarde";
  }
};

const deleteProduct = async (id) => {
  try {
    return await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    return "Hubo un error al eliminar el producto. Inténtelo de nuevo más tarde";
  }
};

export const makeRequest = {
  productList,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
};
