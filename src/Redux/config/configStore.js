import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "../modules/main";

const store = configureStore({
  reducer: { main: mainReducer },
});

export default store;
