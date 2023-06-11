import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const filterState = '';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact(state, action) {
      //   return { ...state, contacts: [...state.contacts, action.payload] };
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload.id);
      state.splice(idx, 1);
      //   state.filter(contact => contact.id !== action.payload.id);
      //   return {
      //     ...state,
      //     contacts: [
      //       ...state.contacts.filter(contact => contact.id !== action.payload.id),
      //     ],
      //   };
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilterState(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { setFilterState } = filterSlice.actions;

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
