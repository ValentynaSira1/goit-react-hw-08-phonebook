import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updatedFilter } from '../../redux/Contacts/FilterSlice';
import { selectFilterByQuery } from '../../redux/Contacts/Selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = event => {
    dispatch(updatedFilter(event.currentTarget.value));
  };

  const value = useSelector(selectFilterByQuery);

  return (
    <label className={css.label}>
      Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={onFilter}
          className={css.input}
          value={value}
        />
    </label>
  );
};
