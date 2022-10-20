import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const getMainApi = async () => {
  return await axios.get(`${BASE_URL}/main`);
};

export const addMainApi = async (payload) => {
  return await axios.post(`${BASE_URL}/main`, payload);
};

export const deleteMAinApi = async (payload) => {
  return axios.delete(`${BASE_URL}/main/${payload.id}`);
};

export const updateMAinApi = async (payload) => {
  return await axios.patch(`${BASE_URL}/main/${payload.id}`, payload);
};
