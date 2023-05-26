import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendMessage = createAsyncThunk('message/sendMessage', async (text, { getState }) => {
  const { message } = getState();
  console.log('text', text);
  const body = {
    chatId: `${message.activeContact.phoneNumber}@c.us`,
    message: text,
  };
  try {
    console.log('thunk', message);

    const { data } = await axios.post(
      `https://api.green-api.com/waInstance${message.idInstance}/SendMessage/${message.apiTokenInstance}`,
      body,
    );
    return { data, text };
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  idInstance: null,
  apiTokenInstance: null,
  isAuth: false,
  contacts: [
    {
      id: 1,
      phoneNumber: 79087801122,
      idInstance: '1101824066',
      apiTokenInstance: 'd7f63fabbfdf480fb249d1fc245286a491c6b62a6dd84613bb',
      messages: [
        { side: 'send', text: 'hello' },
        { side: 'send', text: 'hello' },
        { side: 'incoming', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' },
        {
          side: 'send',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
  ],
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
      state = initialState;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      console.log(state.contacts);
    },
    setActiveContact: (state, action) => {
      state.activeContact = state.contacts.find((contact) => contact.id === action.payload);
      console.log('store >> ', state.activeContact.phoneNumber);
    },
  },
  extraReducers: {
    [sendMessage.fulfilled]: (state, action) => {
      console.log('text', action.payload.text);
      console.log('data', action.payload.data);
      state.activeContact.messages.push({ side: 'send', text: action.payload.text });
      //data.idMessage
    },
  },
});

export default messageSlice.reducer;

export const { setReqParameters, logout, addContact, setActiveContact } = messageSlice.actions;

export const selectIsAuth = (state) => state.message.isAuth;

export const userData = (state) => state.message;

export const contacts = (state) => state.message.contacts;

export const activeContact = (state) => state.message.activeContact;

export const messages = (state) => state.message.activeContact?.messages;
