// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from 'redux/store';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(name, value);
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, number);
    // onSubmit({ name, number });
    dispatch(addContact({ name, number, id: nanoid(3) }));
    reset();
    // dispatch({
    //   type: 'contacts/addContact',
    //   payload: { name, number, id: nanoid(3) },
    // });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form_label}>
        Name
        <input
          placeholder="Homer Simpson"
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.form_label}>
        Number
        <input
          placeholder="XXX-XX-XX"
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={css.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
//   handleSubmit: PropTypes.func,
// };

export default ContactForm;
