import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const getBusStops = async () => {
  return axios.get(`${API}/bus-stops`);
};

export const getBusStopById = async (token, stopId) => {
  return axios.get(`${API}/bus-stops/${stopId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


  
  export const addBusStop = async (token, busStopData) => {
    return axios.post(`${API}/bus-stops`, busStopData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const updateBusStop = async (token, stopId, busStopData) => {
    return axios.put(`${API}/bus-stops/${stopId}`, busStopData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const deleteBusStop = async (token, stopId) => {
    return axios.delete(`${API}/bus-stops/${stopId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  