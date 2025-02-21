import axios from 'axios';
import { API_BASE_URL } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const DashboardAPI = {
  getDashboard: () => api.get('/api/dashboard'),
  completeTask: (taskId: number) => api.patch(`/api/tasks/${taskId}/complete`),
  deleteTask: (taskId: number) => api.delete(`/api/tasks/${taskId}`),
  createTask: (data: { title: string }) => api.post('/api/tasks', data),
};

export default api; 