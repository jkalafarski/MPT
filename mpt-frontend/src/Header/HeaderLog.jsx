// @flow strict

import React from 'react';

import { useHistory } from 'react-router-dom';
import { getLoggedUser, logout } from '@/authentication/login';

import './Header.scss';
import { Navigation } from '@/Navigation';

const css = {
  header: 'mpt-header',
  logo: 'mpt-header__logo',
  nav: 'mpt-header__nav',
};

const navigationItems = [
  { label: 'Główna', linkTo: '/' },
  { label: 'Cennik', linkTo: '/prices' },
  { label: 'O nas', linkTo: '/about' },
  { label: 'Pomoc', linkTo: '/help' },
];

export function HeaderLog() {
  const history = useHistory();

  const { username } = getLoggedUser();
  const loggedAsText = `Logged as ${username}`;

  function logoutUser() {
    logout();
    history.push('/');
  }

  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>

      <div className={css.nav}>
        <Navigation items={navigationItems} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <div>{loggedAsText}</div>
          <a style={{ cursor: 'pointer' }} onClick={logoutUser}>
            Wyloguj
          </a>
        </div>
      </div>
    </div>
  );
}
