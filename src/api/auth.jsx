import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
export const currentUser = async (token) =>
  await axios.post(
    `${API}/current-user`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const getCurrentAdmin = async (token) => {
  return await axios.post(
    `${API}/current-admin`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getCurrentDriver = async (token) => {
  return axios.post(
    `${API}/current-driver`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
