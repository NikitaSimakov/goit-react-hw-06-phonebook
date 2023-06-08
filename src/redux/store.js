import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";


const enhanser = devToolsEnhancer()

const initialState = {contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
filter: '',}

export const reducer = (state = initialState, action) => {
    if(action.type === 'contacts/addContact') {
        return {...state, contacts: [...state.contacts, action.payload]}
    }
    if(action.type === 'filter/setFilter') {
        return {...state, filter: action.payload.filter}
    }
    if(action.type === 'contacts/deleteContacts') {
        return {...state, contacts: [...state.contacts.filter(contact => contact.id !== action.payload.id)]}
    }
    return state
};

export const store = createStore(reducer, enhanser)