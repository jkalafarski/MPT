// @flow strict

import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthenticationContext, logout } from '@/authentication';

import './Header.scss';
import { Navigation } from '@/Navigation';

const css = {
  header: 'mpt-header',
  logo: 'mpt-header__logo',
  info: 'mpt-header__info',
  logout: 'mpt-header__logout',
  nav: 'mpt-header__nav',
};

export function Header() {
  const history = useHistory();
  const { isLogged, username, onLogout } = useAuthenticationContext();

  const items = [
    { label: 'Główna', onClick: () => history.push('/') },
    { label: 'Cennik', onClick: () => history.push('/prices') },
    { label: 'O nas', onClick: () => history.push('/about') },
    { label: 'Pomoc', onClick: () => history.push('/help') },
  ];

  if (!isLogged) {
    items.push({ label: 'Rejestracja', onClick: () => history.push('/signup') });
    items.push({ label: 'Logowanie', onClick: () => history.push('/signin') });
  }

  function handleLogout() {
    logout();
    onLogout();
  }

  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>

      {isLogged && (
        <div className={css.info}>
          <p style={{ fontWeight: 'bold' }}>{username}</p>
          <p className={css.logout} onClick={handleLogout}>
            Wyloguj
          </p>
        </div>
      )}

      <div className={css.nav}>
        <Navigation items={items} />
      </div>
    </div>
  );
}
