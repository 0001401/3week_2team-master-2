// src/redux/modules/mainSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  // 추가하기
  reducers: {
    addTodo: (state, action) => {
      // 새배열을 만들지 않고 기존 배열에 추가
      // push는 muate하고
      state.main.push(action.payload);
    },
    // 삭제하기
    deleteTodo: (state, action) => {
      // 아이디값 지정
      const { id } = action.payload;
      // 새배열을 담을 배열 지정
      // filter는 muate하지 않고 새 array를 retrun
      state.main = state.main.filter((main) => main.id !== id);
    },
    findTodo: (state, action) => {
      const { id } = action.payload;
      state.main = state.main.find((main) => main.id === id);
    },
  },
});

export const { addTodo, deleteTodo, findTodo } = mainSlice.actions;
export default mainSlice.reducer;
