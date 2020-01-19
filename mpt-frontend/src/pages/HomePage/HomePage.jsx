// @flow strict

import React from 'react';

import { useAuthenticationContext } from '@/authentication';

import './HomePage.scss';

import { ImagePlaceholder, TextPlaceholder } from '@/Placeholder';

const css = {
  layout: 'mpt-homepage-layout',
  wideBox: 'mpt-homepage-layout__wide-box',
};

export function HomePage() {
  const { isLogged } = useAuthenticationContext();

  if (isLogged) {
    return null;
  }

  return (
    <div className={css.layout}>
      <div className={css.wideBox}>
        <ImagePlaceholder />
      </div>

      <ImagePlaceholder />
      <ImagePlaceholder />
      <ImagePlaceholder />

      <TextPlaceholder />
      <TextPlaceholder />
      <TextPlaceholder />
    </div>
  );
}
