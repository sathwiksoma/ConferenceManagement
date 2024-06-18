import axios from 'axios';

const API_URL = 'https://localhost:7125/api/Conferences';

const getConferences = () => {
  return axios.get(API_URL);
};

const getConference = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createConference = (conference) => {
  return axios.post(API_URL, conference);
};

const updateConference = (id, conference) => {
  return axios.put(`${API_URL}/${id}`, conference);
};

const deleteConference = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getConferences,
  getConference,
  createConference,
  updateConference,
  deleteConference
};
