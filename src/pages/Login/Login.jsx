import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/Operations';

import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Log in, please</h2>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <input
          className={css.input}
          placeholder="Email"
          type="email"
          name="email"
        />

        <input
          className={css.input}
          placeholder="Password"
          type="password"
          name="password"
        />

        <button className={css.signInButton} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}