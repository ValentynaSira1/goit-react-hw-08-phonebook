import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from './Operation';
import css from '../Layout.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);
  const dispatch = useDispatch();
  const handleLogout = () => {
    
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout} className={css.nav_link}>Logout</button>
    </div>
  );
};
