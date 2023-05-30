import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/Operations';

import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Register to continue, please</h2>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <input
          className={css.input}
          placeholder="Name"
          type="text"
          name="name"
        />
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
        <button className={css.signUpButton} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}