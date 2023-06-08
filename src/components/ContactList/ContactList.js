import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ deleteContactHandler, contacts, filter }) => {
  const contactListRender = () => {
    return contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  };
  return (
    <ul>
      {contactListRender() &&
        contactListRender().map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContactHandler: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default ContactList;
