import { ContactsList } from './contacts/contactsList/contactsList';
import { ContactForm } from './contactsForm/contactsForm';
import { Filter } from './filter/filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './Redux/Operation';
import { RegistrationForm } from './Redux/Form/Registration';
import { LogInForm } from './Redux/Form/LogIn';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';
import { isLoggedIn } from './Redux/selectors';

export const App = () => {
  const loggedIn = useSelector(isLoggedIn);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(refreshUser());
  }, [dispatch]);

  const logged = () => (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );

  return (
    <div className={css.container}>
    <Routes>
      <Route path="/" element={<Layout />}>
      {loggedIn ? (
            <>
        <Route index element={logged()} />
              <Route path="*" element={logged()} />
            </>
          ) : (
            <>
              <Route index element={<LogInForm />} />
              <Route path="register" element={<RegistrationForm />} />
              <Route path="login" element={<LogInForm />} />

              <Route path="*" element={<RegistrationForm />} />
            </>
          )}
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};