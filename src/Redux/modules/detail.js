import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addCommentApi,
  delCommentApi,
  getCommentsListApi,
  updateCommentApi,
} from "../../api/detailapi";

export const __addComment = createAsyncThunk(
  "addCommentThunk",
  async (payload, thunkAPI) => {
    await addCommentApi(payload);
    thunkAPI.dispatch(addComment(payload));
    // 주석을 사용하면은 리듀서가 필요가 없다
    // const list = await getCommentsListApi();
    // console.log(list);
    // thunkAPI.dispatch(getCommentList(list));
  }
);

export const __getCommentList = createAsyncThunk(
  "addCommentList",
  async (_, thunkAPI) => {
    const list = await getCommentsListApi();
    thunkAPI.dispatch(getCommentList(list));
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    await delCommentApi(payload);
    thunkAPI.dispatch(delComment(payload));
    // 주석을 사용하면은 리듀서가 필요가 없다
    // const list = await getCommentsListApi();
    // console.log(list);
    // thunkAPI.dispatch(getCommentList(list));
  }
);

export const __updateComment = createAsyncThunk(
  "updateComment",
  async (payload, thunkAPI) => {
    await updateCommentApi(payload.id, payload.edit, payload.nickname);
    thunkAPI.dispatch(updateComment(payload));
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
      const id = state.comments[state.comments.length - 1]?.id + 1 || 1;
      const commentCard = { ...action.payload, id };
      state.comments.push(commentCard);
    },
    getCommentList: (state, action) => {
      state.comments = action.payload;
    },
    delComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    updateComment: (state, action) => {
      state.comments = state.comments.map((comment) => {
        return comment.id === action.payload.id
          ? { ...comment, body: action.payload.edit.body }
          : comment;
      });
    },
  },
});

export const { addComment, getCommentList, delComment, updateComment } =
  comment.actions;

export default comment.reducer;
