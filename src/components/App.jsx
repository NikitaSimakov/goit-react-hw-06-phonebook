import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { useSelector } from "react-redux";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  // const [filter, setFilter] = useState('');
  // const [filter, setFilter] = useReducer(reducer, '');
  // console.log(filter);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    setContacts(prevState => {
      if (contacts?.some(contact => contact.name === data.name)) {
        Notify.failure(`${data.name}, is already in contact`);
        return contacts;
      }
      return [
        ...prevState,
        { name: data.name, number: data.number, id: nanoid(3) },
      ];
    });
  };

  // const filterChangeHandler = (event) => {
  //   const {value} = event.currentTarget;
  //   setFilter({ type: "filter", payload: value})
  // }

  // const deleteContactHandler = event => {
  //   const { id } = event.currentTarget;
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101',
        padding: 30,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      // filter={filter}
      // contacts={contacts}
      // deleteContactHandler={deleteContactHandler}
      />
    </div>
  );
};
// export class App extends Component {
//   state = {
//     contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
//     name: '',
//     number: '',
//     filter: '',
//   }

// componentDidMount () {
//   const localContacts = JSON.parse(localStorage.getItem('contacts'));
//   localContacts && this.setState({contacts: localContacts});
// }
// componentDidUpdate (prevProps, prevState) {
//   if (prevState.contacts.length !== this.state.contacts.length) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//   }
// }

//   formSubmitHandler = data => {
//     this.setState(prevState => {if (prevState.contacts.some(contact => contact.name === data.name)) {
//       Notify.failure(`${data.name}, is already in contact`)
//       return
//     }
//       return { contacts: [...prevState.contacts, {name: data.name, number: data.number, id: nanoid(3)}]}
//     })
//   }

//   filterChangeHandler = (event) => {
//     const {value} = event.currentTarget;
// this.setState({filter: value})
//   }

//   contactListRender = () => {
//     const {contacts, filter} = this.state;

//     return contacts ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) : [];
//   }
//   deleteContactHandler = (event) => {
//     const {contacts} = this.state;
//     const {id} = event.currentTarget;
//     this.setState({contacts: contacts.filter(contact => contact.id !== id)});
//   }

// render() {
//   const {filter} = this.state
//   const contactListRender = this.contactListRender();
//   const {formSubmitHandler, filterChangeHandler, deleteContactHandler} = this;
// return (
//   <div
//     style={{
//       height: '100vh',
//       fontSize: 30,
//       color: '#010101',
//       padding: 30,
//     }}
//   >
//     <h1>Phonebook</h1>
//     <ContactForm onSubmit={formSubmitHandler}/>
//     <h2>Contacts</h2>
//     <Filter filter={filter} onChange={filterChangeHandler}/>
//     <ContactList contactListRender={contactListRender} deleteContactHandler={deleteContactHandler}/>
//   </div>
// );
// }
// }

export default App;
