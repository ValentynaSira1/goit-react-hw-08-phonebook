import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/Contacts/Operations';

import css from './ContactsListItem.module.css';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="contacts__item">
      {name}:{number}
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};