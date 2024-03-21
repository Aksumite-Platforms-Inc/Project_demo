import { request } from "../lib/axiosConfig";

//this is cart api service

//get all carts for user
export const getAllCarts = async (token) => {
  try {
    const { data } = await request("get", "carts", null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//add cart
export const addCart = async (cart, token, id) => {
  try {
    const { data } = await request("post", `carts/${id}`, cart, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//clear cart  based on product id

export const clearCart = async (id, token) => {
  try {
    const { data } = await request("delete", `carts/${id}`, null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//clear all cart items
export const clearAllCart = async (token) => {
  try {
    const { data } = await request("delete", `carts`, null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
