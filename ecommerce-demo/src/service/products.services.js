import { request } from "../lib/axiosConfig";

//this is products api service

//get all products
export const getAllProducts = async () => {
  try {
    const { data } = await request("get", "products");
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//add product
export const addProduct = async (product, token) => {
  try {
    const { data } = await request("post", "products/create", product, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//update product

export const updateProduct = async (product, token, id) => {
  try {
    const { data } = await request("put", `products/${id}`, product, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//delete product

export const deleteProduct = async (id, token) => {
  try {
    const { data } = await request("delete", `products/${id}`, null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
