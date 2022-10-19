import axios from "axios";

const BASE_URL = "http://localhost:3030";

export const addCommentApi = async (cardId, commentList) => {
  await axios.patch(`${BASE_URL}/main/${cardId}`, { comments: commentList });
};

export const delCommentApi = async (cardId, commentList) => {
  await axios.patch(`${BASE_URL}/main/${cardId}`, { comments: commentList });
};

export const updateCommentApi = async (cardId, commentList) => {
  await axios.patch(`${BASE_URL}/main/${cardId}`, {
    comments: commentList,
  });
};

export const getCommentsListApi = async (cardId) => {
  const res = await axios.get(`${BASE_URL}/main/${cardId}`);
  return res.data;
};
