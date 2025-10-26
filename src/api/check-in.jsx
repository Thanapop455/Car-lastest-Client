import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const checkIn = async (token, busStopId, people) => {
    return axios.post(`${API}/check-in`, { busStopId, people }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const getCheckIns = async (token) => {
    return axios.get(`${API}/check-ins`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const getCheckInsByBusStop = async (token, stopId) => {
    return axios.get(`${API}/check-ins/bus-stop/${stopId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const respondToCheckIn = async (token, checkInId, response) => {
    return axios.put(`${API}/check-in/${checkInId}/respond`, { response }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

export const getCheckInStatus = async (checkInId) => {
  return axios.get(`${API}/check-in/${checkInId}/status`);
};
