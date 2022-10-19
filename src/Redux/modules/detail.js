import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi, getCommentsListApi } from "../../api/detailapi";

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

const initialState = {
  comments: [],
};

const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const id = state.comments[state.comments.length - 1]?.id + 1 || 1;
<<<<<<< HEAD
      state.comments.push(action.payload);
=======
      const commentCard = { ...action.payload, id };
      state.comments.push(commentCard);
>>>>>>> 4dc6d9b07dcd26187579429e6d0cfb4aa3b8b374
    },
    getCommentList: (state, action) => {
      state.comments = action.payload;
    },
    delComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});

export const { addComment, getCommentList, delComment } = comment.actions;

export default comment.reducer;
