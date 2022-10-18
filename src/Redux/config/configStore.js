
import { configureStore } from "@reduxjs/toolkit";
import detail from "../modules/detail";

const store = configureStore({
  reducer: {
    detail,
    main
  },
});

export default store;
