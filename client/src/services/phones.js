import api from './api';

export const phonesList = () => api.get('/phones').then((res) => res.data);

export const phonesLoad = (id) =>
  api.get(`/phones/${id}`).then((res) => res.data);
