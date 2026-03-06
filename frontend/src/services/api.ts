import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getVehicles = async () => {
  const response = await api.get('/vehicles');
  return response.data;
};

export const createContract = async (data) => {
  const response = await api.post('/contracts', data);
  return response.data;
};

export default api;