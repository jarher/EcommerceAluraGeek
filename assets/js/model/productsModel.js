import { makeRequest } from "../service/productService.js";

const getAllProducts = async () => await makeRequest.productList();

const getProduct = async (id) => await makeRequest.getProduct(id);

const createProduct = async (data) => await makeRequest.createProduct(data);

const updateProduct = async (data) => await makeRequest.updateProduct(data);

const deleteProduct = async (id) => await makeRequest.deleteProduct(id);

export const model = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}