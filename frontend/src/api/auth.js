// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Or your environment variable
  withCredentials: true,
});

// Login user
export const loginUser = async (email, password) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data;
};

// Register user
export const registerUser = async (name, email, password) => {
  const res = await API.post("/auth/signup", { name, email, password });
  return res.data;
};
