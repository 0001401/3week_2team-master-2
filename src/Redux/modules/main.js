import { configureStore, createSlice } from "@reduxjs/toolkit";

let commentInput = createSlice({
  name: "cart",
  initialState: [
    { id: 0, nickName: "kim", comment: "안녕하세요?" },
    { id: 1, nickName: "park", comment: "접니다?" },
  ],
});
