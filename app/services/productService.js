import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Error fetching products");
  }
  return response.json();
}

export const getProductById = async (id) => {
  const res = await axios.get(`${API_URL}/products/${id}`);
  return res.data;
};
