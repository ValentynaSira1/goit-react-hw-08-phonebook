import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../../redux/Contacts/Operations';
import { selectError, selectIsLoading } from '../../redux/Contacts/Selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filters from '../../components/Filters/Filters';
import ContactsList from '../../components/ContactsList/ContactsList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <Filters />
        {isLoading && !error }
        <ContactsList />
      </div>
    </div>
  );
}