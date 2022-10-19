import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCommentApi,
  getCommentsListApi,
  delCommentApi,
  updateCommentApi,
  getCommentsListApiTest,
} from "../../api/detailapi";

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    // 해당 카드의 commentList 불러오기
    const { cardId } = payload;
    const res = await getCommentsListApiTest(cardId);
    const commentList = res.comments;
    commentList.push(payload);
    await addCommentApi(cardId, commentList);
    thunkAPI.dispatch(addComment(commentList));
  }
);

// 수정부분
export const __getCommentList = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    const res = await getCommentsListApiTest(payload);
    const commentLists = res.comments;
    thunkAPI.dispatch(getCommentList(commentLists));
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    await delCommentApi(payload);
    thunkAPI.dispatch(delComment(payload));
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
      state.comments = action.payload;
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
