import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const getListAllUsers = async (token) => {
    // code body
    return axios.get(`${API}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const changeUserStatus = async (token,value) => {
    // code body
    return axios.post(`${API}/change-status`,value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const changeUserRole = async (token,value) => {
    // code body
    return axios.post(`${API}/change-role`,value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };