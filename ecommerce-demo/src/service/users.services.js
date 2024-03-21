import { request } from "../lib/axiosConfig";

//this is users api service

//get all users
export const getAllUsers = async (token) => {
  try {
    const { data } = await request("get", "users", null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//register user
export const registerUser = async (user) => {
  try {
    const { data } = await request("post", "users/register", user);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//login user

export const loginUser = async (user) => {
  try {
    const { data } = await request("post", "users/login", user);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//update user

export const updateUser = async (user, token, id) => {
  try {
    const { data } = await request("put", `users/${id}`, user, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//delete user

export const deleteUser = async (id, token) => {
  try {
    const { data } = await request("delete", `users/${id}`, null, token);
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
