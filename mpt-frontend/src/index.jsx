import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from '@/Root';

const $root = document.querySelector('#app');

if ($root) {
  ReactDOM.render(<Root />, $root);
}
