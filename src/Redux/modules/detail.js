import { createSlice } from "@reduxjs/toolkit";

let commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducer: {
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
