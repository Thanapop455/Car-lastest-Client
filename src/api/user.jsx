import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const getDrivers = async (token) => {
  return axios.get(`${API}/drivers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
