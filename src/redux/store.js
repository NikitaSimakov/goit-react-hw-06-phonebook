import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

// import { filterState } from './state';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsState,
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       const idx = state.findIndex(contact => contact.id === action.payload.id);
//       state.splice(idx, 1);
//     },
//   },
// });
// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterState,
//   reducers: {
//     setFilterState(state, action) {
//       state = action.payload;
//       return state;
//     },
//   },
// });
// export const filterReducer = filterSlice.reducer;
// export const { setFilterState } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// export const reducer = (state = initialState, action) => {
//   if (action.type === 'contacts/addContact') {
//     return { ...state, contacts: [...state.contacts, action.payload] };
//   }
//   if (action.type === 'filter/setFilter') {
//     return { ...state, filter: action.payload.filter };
//   }
//   if (action.type === 'contacts/deleteContacts') {
//     return {
//       ...state,
//       contacts: [
//         ...state.contacts.filter(contact => contact.id !== action.payload.id),
//       ],
//     };
//   }
//   return state;
// };

// export const store = createStore(reducer, enhanser);
