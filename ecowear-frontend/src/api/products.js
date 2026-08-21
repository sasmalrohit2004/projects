import axios from "axios";

const API = "http://localhost:5000/api/products";

export const fetchAllProducts = () => axios.get(API);

export const fetchProductsByCategory = (category) =>
  axios.get(`${API}?category=${category}`);

export const fetchProductById = (id) => axios.get(`${API}/${id}`);

export const createProduct = (data) => axios.post(API, data);

export const updateProduct = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteProduct = (id) => axios.delete(`${API}/${id}`);