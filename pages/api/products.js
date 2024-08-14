import axios from "axios";

const baseUrl = "http://localhost:3003/";

// Veriyi ekleme
const add = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}products`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Veriyi alma
const get = async () => {
  try {
    const response = await axios.get(`${baseUrl}products`);
    return response.data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

// Veriyi güncelleme
const update = async (id, data) => {
  try {
    const response = await axios.put(`${baseUrl}products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Veriyi silme
const remove = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error removing product:", error);
    throw error;
  }
};

export { add, get, remove, update };
