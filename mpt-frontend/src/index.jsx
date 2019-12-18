// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';

import './globalStyles/index.scss';

import { Root } from '@/Root';

const $root = document.querySelector('#app');

if ($root) {
  ReactDOM.render(<Root />, $root);
}
