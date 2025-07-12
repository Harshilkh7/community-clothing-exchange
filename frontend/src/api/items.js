// src/api/item.js
import axios from './axios';

export const addItem = async (formData, token) => {
  return axios.post('/items', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  });
};

export const getItemById = async (id) => {
  return axios.get(`/items/${id}`);
};

export const getFeaturedItems = async () => {
  return axios.get('/items/featured');
};

export const swapItem = async (id, token) => {
  return axios.post(`/items/${id}/swap`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getAllItems = () => axios.get('/items');
