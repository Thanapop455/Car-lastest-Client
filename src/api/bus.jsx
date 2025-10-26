import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const getBuses = async (token) => {
  return axios.get(`${API}/buses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getBusById = async (token, busId) => {
  return axios.get(`${API}/buses/${busId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addBus = async (token, busData) => {
  return axios.post(`${API}/buses`, busData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateBusStatus = async (token, driverId, status) => {
  return axios.put(`${API}/buses/${driverId}/status`, 
    { status },
    { headers: { Authorization: `Bearer ${token}` } } // ✅ ตรวจสอบว่ามี Token หรือไม่
  );
};
export const assignDriver = async (token, busId, driverId) => {
  return axios.put(`${API}/buses/${busId}/assign-driver`, { driverId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteBus = async (token, busId) => {
  return axios.delete(`${API}/buses/${busId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
