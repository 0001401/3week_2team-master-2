import { configureStore } from "@reduxjs/toolkit";
import detail from "../modules/detail";
import mainReducer from "../modules/main";

const store = configureStore({
  reducer: {
    detail,
    main: mainReducer,
  },
});

export default store;
