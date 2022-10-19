import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCommentApi,
  delCommentApi,
  updateCommentApi,
  getCommentsListApi,
} from "../../api/commentApi";

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    // 해당 카드의 commentList 불러오기
    const { cardId } = payload;
    const res = await getCommentsListApi(cardId);
    const commentList = res.comments;
    commentList.push(payload);
    await addCommentApi(cardId, commentList);
    thunkAPI.dispatch(addComment(commentList));
  }
);

export const __getCommentList = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    const res = await getCommentsListApi(payload);
    const commentLists = res.comments;
    thunkAPI.dispatch(getCommentList(commentLists));
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    const { cardId, id } = payload;
    const res = await getCommentsListApi(cardId);
    const commentList = res.comments;
    const updatedCommentList = commentList.filter((item) => {
      return item.id !== id;
    });
    await delCommentApi(cardId, updatedCommentList);
    thunkAPI.dispatch(delComment(updatedCommentList));
  }
);

export const __updateComment = createAsyncThunk(
  "updateComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { cardId, id } = payload;
    const res = await getCommentsListApi(cardId);
    const commentList = res.comments;
    const updatedList = commentList.filter((item) => {
      return item.id !== id;
    });
    updatedList.push(payload);
    await updateCommentApi(cardId, updatedList);
    thunkAPI.dispatch(updateComment(updatedList));
  }
);

const initialState = {
  comments: [],
};

const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = action.payload;
    },
    getCommentList: (state, action) => {
      state.comments = action.payload;
    },
    delComment: (state, action) => {
      state.comments = action.payload;
    },
    updateComment: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { addComment, getCommentList, delComment, updateComment } =
  comment.actions;

export default comment.reducer;
