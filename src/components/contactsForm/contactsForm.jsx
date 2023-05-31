import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsForm.module.css';
import { addContact } from '../../redux/Contacts/Operations';
import { selectContacts } from '../../redux/Contacts/Selectors';
import Notiflix from 'notiflix';

export default function ContactForm () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const duplicationNameCheck = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const duplicationNumberCheck = newNumber => {
    return contacts.find(({ number }) => number === newNumber);
  };

function handleChange(e) {
  const { name, value } = e.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
      break;
    }
}

function handleSubmit(e) {
  e.preventDefault();

  if (duplicationNameCheck(name) || duplicationNumberCheck(number)) {
    Notiflix.Notify.failure(`This contact is already in List`);
      return;
  }

  dispatch(addContact({ name, number }));
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
};

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={css.button} type="submit">ADD CONTACTS</button>
    </form>
  );
};
