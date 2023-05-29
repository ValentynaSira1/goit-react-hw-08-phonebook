import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { postNewContact } from '../Redux/Operation';
import { allContacts } from '../Redux/selectors';

import css from './contactsForm.module.css';

import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(allContacts);

  const handleChange = e => {
    const target = e.target.name;
    if (target === 'name') {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number: phone,
    };
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.phone === phone
      )
    ) {
      toast.error(`${name} or ${phone} is already in contacts`);
    } else {
      dispatch(postNewContact(newContact));
      setName('');
      setPhone('');
    }
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
          value={phone}
        />
      </label>
      <button className={css.button} type="submit">Add contacts</button>
    </form>
  );
};
