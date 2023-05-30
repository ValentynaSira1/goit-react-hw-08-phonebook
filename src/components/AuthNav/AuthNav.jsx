import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.navLinkWrap}>
      <NavLink className={css.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navLink} to="/login">
        Login
      </NavLink>
    </div>
  );
}