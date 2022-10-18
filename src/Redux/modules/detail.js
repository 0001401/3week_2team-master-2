import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi } from "../../api/detailapi";

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    const postId = thunkAPI.getState().post.post.id;
    const comment = { comment: payload, postId };
    await addCommentApi(comment);

    thunkAPI.dispatch(addComment(comment));
  }
);

let commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {
    getCommentList: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      const id = state.comment[state.comments.length - 1]?.id + 1 || 1;

      state.comment.push({ id, ...action.payload });
    },
  },
});

export const { getCommentList, addComment } = commentSlice.actions;

export default commentSlice.reducer;
