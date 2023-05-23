import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export default store;
