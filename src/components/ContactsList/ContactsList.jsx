import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterByQuery,
} from '../../redux/Contacts/Selectors';
import {ContactsListItem} from '../contactsListItem/ContactsListItem';
import css from './ContactsList.module.css';

const selectVisibleContacts = (contacts, query) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
};

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectFilterByQuery);
  const visibleContacts = selectVisibleContacts(contacts, query);

  return (
    <ul className={css.list}>
      {contacts &&
        visibleContacts.map(contact => (
          <ContactsListItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
};