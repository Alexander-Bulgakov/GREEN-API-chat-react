import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendMessage = createAsyncThunk('chat/sendMessage', async (text, { getState }) => {
  const { chat } = getState();
  const contact = chat.contacts.find((contact) => contact.id === chat.activeContactId);
  const body = {
    chatId: `${contact.phoneNumber}@c.us`,
    message: text,
  };

  try {
    const { data } = await axios.post(
      `https://api.green-api.com/waInstance${chat.idInstance}/SendMessage/${chat.apiTokenInstance}`,
      body,
    );
    return { data, text };
  } catch (e) {
    console.log(e);
  }
});

export const receiveNotification = createAsyncThunk('chat/receiveNotification', async (arg, { getState }) => {
  try {
    const { chat } = getState();
    const data = await axios.get(
      `https://api.green-api.com/waInstance${chat.idInstance}/receiveNotification/${chat.apiTokenInstance}`,
    );
    return data;
  } catch (e) {
    console.log(e);
  }
});

const deleteNotification = async (id, idInstance, apiTokenInstance) => {
  try {
    const data = await axios.delete(
      `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}
      `,
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
const initialState = {
  idInstance: null,
  apiTokenInstance: null,
  contacts: [],
  activeContact: null,
  activeContactId: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setReqParameters: (state, action) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
    },
    logout: (state, action) => {
      state = initialState;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    setActiveContact: (state, action) => {
      state.activeContact = state.contacts.find((contact) => contact.id === action.payload);
      state.activeContactId = action.payload;
    },
  },
  extraReducers: {
    [sendMessage.fulfilled]: (state, action) => {
      const contact = state.contacts.find((contact) => contact.id === state.activeContactId);
      contact.messages.push({ side: 'send', text: action.payload.text });
    },
    [receiveNotification.fulfilled]: (state, action) => {
      if (!!action.payload.data) {
        const contact = state.contacts.find((contact) => contact.id === state.activeContactId);
        contact.messages.push({
          side: 'incoming',
          text: action.payload.data?.body?.messageData?.textMessageData?.textMessage,
        });
        deleteNotification(action.payload.data?.receiptId, state.idInstance, state.apiTokenInstance);
      }
    },
    [deleteNotification.fulfilled]: (state, action) => {
      console.log('deleteNotification >>> ', action.payload);
    },
  },
});

export default chatSlice.reducer;

export const { setReqParameters, logout, addContact, setActiveContact } = chatSlice.actions;

export const checkAuth = (state) => !!state.chat.idInstance;

export const getUserData = (state) => state.chat;

export const getContacts = (state) => state.chat.contacts;

export const activeContact = (state) => state.chat.activeContact;

export const getMessages = (state) => {
  const contact = state.chat.contacts.find((contact) => contact.id == state.chat.activeContactId);
  return !!contact ? contact.messages : [];
};
