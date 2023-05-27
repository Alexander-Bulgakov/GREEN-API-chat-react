import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendMessage = createAsyncThunk('chat/sendMessage', async (text, { getState }) => {
  const { chat } = getState();
  console.log('text from send', text);
  console.log('chatState fom send', chat);
  // const body = {
  //   chatId: `${message.activeContact.phoneNumber}@c.us`,
  //   message: text,
  // };

  //
  const contact = chat.contacts.find((contact) => contact.id === chat.activeContactId);
  console.log('contact form send', contact);
  const body = {
    chatId: `${contact.phoneNumber}@c.us`,
    message: text,
  };
  //

  try {
    console.log('thunk', chat);

    const { data } = await axios.post(
      `https://api.green-api.com/waInstance${chat.idInstance}/SendMessage/${chat.apiTokenInstance}`,
      body,
    );
    return { data, text };
  } catch (e) {
    console.log(e);
  }
});

export const receiveNotification = createAsyncThunk('message/receiveNotification', async (arg, { getState }) => {
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
    // const { chatState } = getState();
    const data = await axios.delete(
      `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}
      `,
    );
    console.log('deleteNotification >>> ', data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
const initialState = {
  idInstance: null,
  apiTokenInstance: null,
  isAuth: false,
  contacts: [
    // {
    //   id: 1,
    //   phoneNumber: 79087801122,
    //   idInstance: '1101824066',
    //   apiTokenInstance: 'd7f63fabbfdf480fb249d1fc245286a491c6b62a6dd84613bb',
    //   messages: [
    //     { side: 'send', text: 'hello' },
    //     { side: 'send', text: 'hello' },
    //     { side: 'incoming', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' },
    //     {
    //       side: 'send',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //     },
    //   ],
    // },
  ],
  activeContact: null,
  activeContactId: null,
};

const chatSlice = createSlice({
  name: 'chat',
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
      console.log('contacts from set', state.contacts);
      state.activeContact = state.contacts.find((contact) => contact.id === action.payload);
      //
      state.activeContactId = action.payload;
      console.log('state.activeContactId ', state.activeContactId);
      console.log('store >> ', state.activeContact.phoneNumber);
    },
  },
  extraReducers: {
    [sendMessage.fulfilled]: (state, action) => {
      console.log('text', action.payload.text);
      console.log('data', action.payload.data);
      const contact = state.contacts.find((contact) => contact.id === state.activeContactId);
      contact.messages.push({ side: 'send', text: action.payload.text });
    },
    [receiveNotification.fulfilled]: (state, action) => {
      console.log('receive >>> ', action.payload.data);
      if (action.payload.data) {
        const contact = state.contacts.find((contact) => contact.id === state.activeContactId);
        console.log('contact from receive full', contact);
        contact.messages.push({
          side: 'incoming',
          text: action.payload.data?.body?.messageData?.textMessageData?.textMessage,
        });
        console.log('id >>> ', action.payload.data?.receiptId);
        deleteNotification(action.payload.data?.receiptId, state.idInstance, state.apiTokenInstance);
        console.log('receiveNotification data', action.payload.data);
      }
    },
    [deleteNotification.fulfilled]: (state, action) => {
      console.log('deleteNotification >>> ', action.payload);
    },
  },
});

export default chatSlice.reducer;

export const { setReqParameters, logout, addContact, setActiveContact } = chatSlice.actions;

export const selectIsAuth = (state) => state.chat.isAuth;

export const userData = (state) => state.chat;

export const contacts = (state) => state.chat.contacts;

export const activeContact = (state) => state.chat.activeContact;

export const getMessages = (state) => {
  // console.log('state from messages', state.chat.activeContactId);
  const contact = state.chat.contacts.find((contact) => contact.id == state.chat.activeContactId);
  console.log('contact from messages', contact);
  return !!contact ? contact.messages : [];
  // if (!!contact) {
  //   return contact.messages;
  // } else {
  //   return [];
  // }
  // state.message.activeContact?.messages;
};
