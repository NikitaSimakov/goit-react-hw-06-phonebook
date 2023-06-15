import { contactsState } from './state';
import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact(state, action) {
      if (state.some(contact => contact.name === action.payload.name)) {
        Notify.failure(`${action.payload.name}, is already in contact`);
      } else {
        state.push(action.payload);
      }
    },
    deleteContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload.id);
      state.splice(idx, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
