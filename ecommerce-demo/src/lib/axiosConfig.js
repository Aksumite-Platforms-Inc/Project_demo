import axios from "axios";

axios.defaults.baseURL = "https://aksumite-online-shop-ymwg.vercel.app/api";
export async function request(method, url, data = null, token = null) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
