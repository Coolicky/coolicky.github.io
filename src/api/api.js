import axios from "axios";

const api = axios.create({
  baseURL: "https://coolicky-api.azurewebsites.net/api",
});

export const createCard = (payload) => api.post(`/card`, payload);
export const updateCardById = (id, payload) => api.put(`/card/${id}`, payload);
export const deleteCardById = (id) => api.delete(`/card/${id}`);
export const getCardById = (id) => api.get(`/movie/${id}`);
export const getAllCards = () => api.get(`/cards`);
export const getCardsbyCategory = (category) => api.get(`/cards/${category}`);

const apis = {
  createCard,
  updateCardById,
  deleteCardById,
  getCardById,
  getAllCards,
  getCardsbyCategory,
};

export default apis;
