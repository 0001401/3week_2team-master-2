import axios from "axios";

export const getMainApi = async () => {
  return await axios.get("http://localhost:3030/main");
};

export const addMainApi = async (payload) => {
  return await axios.post("http://localhost:3030/main", payload);
};

export const deleteMAinApi = async (payload) => {
  return axios.delete(`http://localhost:3030/main/${payload.id}`);
};

export const updateMAinApi = async (payload) => {
  return await axios.patch(`http://localhost:3030/main/${payload.id}`, payload);
};
