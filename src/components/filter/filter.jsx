import css from './filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../Redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={(e) => dispatch(filterContacts(e.target.value))}
          className={css.input}
        />
    </label>
  );
};
