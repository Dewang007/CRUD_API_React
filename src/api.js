import axios from "axios";
import conf from "./conf/conf";

// const fakeApiUrl = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await axios.get(conf.fakeApiUrl);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${conf.fakeApiUrl}/${id}`);
  return response.data;
};

// export const limitProduct = async (id) => {
//   const response = await axios.get(`${conf.fakeApiUrl}/${id}?limit=5`);
//   return response.data;
// };

export const createProduct = async (product) => {
  const response = await axios.post(conf.fakeApiUrl, product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${conf.fakeApiUrl}/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${fakeApiUrl}/${id}`);
  return response.data;
};
