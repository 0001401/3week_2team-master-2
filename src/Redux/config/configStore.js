import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import mainReducer from "../modules/main";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    comment,
    main: mainReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
