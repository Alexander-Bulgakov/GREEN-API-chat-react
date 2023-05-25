import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idInstance: null,
  apiTokenInstance: null,
  isAuth: false,
  contacts: ['afdvadf', 'aefvadf'],
  phoneNumber: null,
  activeContact: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setReqParameters: (state, action) => {
      console.log('payload >>> ', action.payload);
      state.isAuth = true;
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
      console.log(state.isAuth);
    },
    logout: (state, action) => {
      console.log(action);
      // debugger;
      state = initialState;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      state.contacts.push(action.payload);
      console.log(state.contacts);
      // console.log(state.phoneNumber);
    },
    setActiveContact: (state, action) => {
      state.activeContact = action.payload;
    },
  },
});

export default messageSlice.reducer;

export const { setReqParameters, logout, setPhoneNumber, setActiveContact } = messageSlice.actions;

export const selectIsAuth = (state) => state.message.isAuth;

export const userData = (state) => state.message.idInstance;

export const contacts = (state) => state.message.contacts;
