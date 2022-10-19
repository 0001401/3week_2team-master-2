import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMainApi,
  addMainApi,
  deleteMAinApi,
  updateMAinApi,
} from "../../api/mainapi";

const initialState = {
  main: [],
};

export const __getTodo = createAsyncThunk(
  "getTodo",
  async (payload, thunkAPI) => {
    const { data } = await getMainApi();
    thunkAPI.dispatch(getTodo(data));
  }
);

export const __addTodo = createAsyncThunk(
  "addTodo",
  async (payload, thunkAPI) => {
    const { data } = await addMainApi(payload);
    thunkAPI.dispatch(addTodo(data));
  }
);

export const __deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload, thunkAPI) => {
    await deleteMAinApi(payload);
    const { data } = await getMainApi();
    thunkAPI.dispatch(getTodo(data));
  }
);

export const __updateTodo = createAsyncThunk(
  "updateTodo",
  async (payload, thunkAPI) => {
    await updateMAinApi(payload);
    const { data } = await getMainApi();
    thunkAPI.dispatch(getTodo(data));
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.main = action.payload;
    },
    addTodo: (state, action) => {
      state.main = state.main.push(action.payload);
    },
  },
});

export const { getTodo, addTodo } = mainSlice.actions;
export default mainSlice.reducer;
