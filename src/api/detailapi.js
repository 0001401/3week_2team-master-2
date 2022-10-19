import axios from "axios";

const BASE_URL = "http://localhost:3030";

export const addCommentApi = async (cardId, commentList) => {
  await axios.patch(`${BASE_URL}/main/${cardId}`, { comments: commentList });
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

// 수정부분
export const getCommentsListApiTest = async (cardId) => {
  const res = await axios.get(`${BASE_URL}/main/${cardId}`);
  return res.data;
};
