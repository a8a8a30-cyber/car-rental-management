import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getVehicles = async () => {
  const response = await api.get('/vehicles');
  return response.data;
};

export const getContracts = async () => {
  const response = await api.get('/contracts');
  return response.data;
};

export const getMaintenanceRecords = async () => {
  const response = await api.get('/maintenance');
  return response.data;
};

export const getAnalyticsData = async () => {
  const response = await api.get('/analytics');
  return response.data;
};

export const createVehicle = async (data: Record<string, unknown>) => {
  const response = await api.post('/vehicles', data);
  return response.data;
};

export const createContract = async (data: Record<string, unknown>) => {
  const response = await api.post('/contracts', data);
  return response.data;
};

export const createMaintenanceRecord = async (data: Record<string, unknown>) => {
  const response = await api.post('/maintenance', data);
  return response.data;
};

export default api;