import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi, getCommentListApi } from "../../api/detailapi";
import axios from "axios";
import { addCommentApi, getCommentsListApi } from "../../api/detailapi";

export const __addComment = createAsyncThunk(
  "addCommentThunk",
  (payload, thunkAPI) => {
    addCommentApi(payload);

    thunkAPI.dispatch(addComment(payload));
  }
);

export const __getCommentList = createAsyncThunk(
  "addCommentList",
  async (_, thunkAPI) => {
    const list = await getCommentsListApi();
    console.log(list);
    thunkAPI.dispatch(getCommentList(list));
  }
);

const initialState = {
  comments: [],
};

let comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const id = state.comments[state.comments?.length - 1].id + 1 || 1;
      state.comments.push(action.payload);
    },
    // getCommentList: (state, action) => {
    //   state.comments = action.payload;
    // },
  },
});

export const { addComment, getCommentList } = comment.actions;

export default comment.reducer;
