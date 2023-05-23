import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idInstance: null,
  apiTokenInstance: null,
  isAuth: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setReqParameters: (state, action) => {
      console.log("payload >>> ", action.payload);
      state.isAuth = true;
      console.log(state.isAuth);
    },
  },
});

export default messageSlice.reducer;

export const { setReqParameters } = messageSlice.actions;

export const selectIsAuth = (state) => state.message.isAuth;
