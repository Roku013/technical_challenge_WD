import api from './api';

export const phoneList = () => {
  api.get('/').then((res) => res.data);
};

export const phoneLoad = (id) => api.get(`/${id}`).then((res) => res.data);
