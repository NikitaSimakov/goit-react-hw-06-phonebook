import { initialState } from './state';

export const reducer = (state = initialState, action) => {
  if (action.type === 'contacts/addContact') {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  if (action.type === 'filter/setFilter') {
    return { ...state, filter: action.payload.filter };
  }
  if (action.type === 'contacts/deleteContacts') {
    return {
      ...state,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload.id),
      ],
    };
  }
  return state;
};
