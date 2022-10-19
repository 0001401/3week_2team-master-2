import axios from "axios";

const BASE_URL = "http://localhost:3030";

export const addCommentApi = async (comment) => {
  await axios.post(`${BASE_URL}/comments`, comment);
};

export const getCommentsListApi = async () => {
  const response = await axios.get(`${BASE_URL}/comments`);
  return response.data;
};

export const delCommentApi = async (id) => {
  await axios.delete(`${BASE_URL}/comments/${id}`);
};

export const updateCommentApi = async (id, comment, nickname) => {
  console.log(id, comment, nickname);
  await axios.put(`${BASE_URL}/comments/${id}`, {
    nickname,
    body: comment.body,
  });
};
