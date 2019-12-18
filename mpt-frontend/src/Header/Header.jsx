// @flow strict

import React from 'react';

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
  { label: 'Rejestracja', linkTo: '/signup' },
  { label: 'Logowanie', linkTo: '/signin' },
];

export function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>

      <div className={css.nav}>
        <Navigation items={navigationItems} />
      </div>
    </div>
  );
}
