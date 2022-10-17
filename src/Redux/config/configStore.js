import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "../modules/main";
import detail from "../modules/detail";

const store = configureStore({
  reducer: { main: mainReducer, detail },
});

export default store;
