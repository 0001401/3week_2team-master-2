import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import mainReducer from "../modules/main";

const store = configureStore({
  reducer: {
    comment,
    main: mainReducer,
  },
});

export default store;
