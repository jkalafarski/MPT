// @flow strict

import React from 'react';

import './HomePage.scss';

import { ImagePlaceholder, TextPlaceholder } from '@/Placeholder';

const css = {
  layout: 'mpt-homepage-layout',
  wideBox: 'mpt-homepage-layout__wide-box',
};

export function HomePage() {
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
