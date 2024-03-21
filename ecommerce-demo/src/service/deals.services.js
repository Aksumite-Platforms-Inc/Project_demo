import { request } from "../lib/axiosConfig";

//this is deals api service

//get all deals
export const getAllDeals = async () => {
  try {
    const { data } = await request("get", "deals", null);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//add deal
export const addDeal = async (deal, token) => {
  try {
    const { data } = await request("post", "deals/create", deal, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//update deal

export const updateDeal = async (deal, token, id) => {
  try {
    const { data } = await request("put", `deals/${id}`, deal, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//delete deal

export const deleteDeal = async (id, token) => {
  try {
    const { data } = await request("delete", `deals/${id}`, null, token);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
