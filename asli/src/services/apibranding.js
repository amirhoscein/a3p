import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const getBranding = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export { getBranding };
