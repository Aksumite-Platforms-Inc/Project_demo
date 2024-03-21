import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";
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
