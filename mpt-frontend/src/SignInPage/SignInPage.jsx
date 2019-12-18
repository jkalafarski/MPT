// @flow strict

import React from 'react';

import './SignInPage.scss';

import { ImagePlaceholder } from '@/Placeholder';

const css = {
  layout: 'mpt-signin-layout',
};

export function SignInPage() {
  return (
    <div className={css.layout}>
      <ImagePlaceholder fullHeight />

      <div style={{ width: 1000 }}>asdasd</div>

      <ImagePlaceholder fullHeight />
    </div>
  );
}
