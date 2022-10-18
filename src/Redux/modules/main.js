import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  main: [],
};

export const __getTodo = createAsyncThunk(
  "getTodo",
  async (payload, thunkAPI) => {
    const { data } = await axios.get("http://localhost:3030/main");
    thunkAPI.dispatch(getTodo(data));
  }
);

export const __addTodo = createAsyncThunk(
  "addTodo",
  async (payload, thunkAPI) => {
    const { data } = await axios.post("http://localhost:3030/main", payload);
    thunkAPI.dispatch(getTodo(data));
  }
);

export const __deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload, thunkAPI) => {
    await axios.delete(`http://localhost:3030/main/${payload.id}`);
    const { data } = await axios.get("http://localhost:3030/main");
    thunkAPI.dispatch(getTodo(data));
  }
);

export const __updateTodo = createAsyncThunk(
  "updateTodo",
  async (payload, thunkAPI) => {
    await axios.patch(`http://localhost:3030/main/${payload.id}`, payload);
    const { data } = await axios.get("http://localhost:3030/main");
    thunkAPI.dispatch(getTodo(data));
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState,
  // 추가하기
  reducers: {
    getTodo: (state, action) => {
      state.main = action.payload;
    },
    // addTodo: (state, action) => {
    //   // 새배열을 만들지 않고 기존 배열에 추가
    //   // push는 muate하고
    //   state.main.push(action.payload);
    // },
    // 삭제하기
    // deleteTodo: (state, action) => {
    //   // 아이디값 지정
    //   const { id } = action.payload;
    //   // 새배열을 담을 배열 지정
    //   // filter는 muate하지 않고 새 array를 retrun
    //   state.main = state.main.filter((main) => main.id !== id);
  },
  findTodo: (state, action) => {
    const { id } = action.payload;
    state.main = state.main.find((main) => main.id === id);
  },
});

export const { getTodo, findTodo } = mainSlice.actions;
export default mainSlice.reducer;
