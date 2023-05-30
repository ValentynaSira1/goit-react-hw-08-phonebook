import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/Auth/Operations';
import { selectUsername } from '../../redux/Auth/Selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
