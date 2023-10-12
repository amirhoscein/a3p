import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProductslimit = async () => {
  const response = await axios.get(`${BASE_URL}/products?limit=3`);
  return response.data;
};

export { getProductslimit };
