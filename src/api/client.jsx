// src/api/client.js
import axios from "axios";

export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const api = axios.create({ baseURL: API_BASE });

export const authHeader = (token) =>
  token ? { Authorization: `Bearer ${token}` } : {};

export default api;
