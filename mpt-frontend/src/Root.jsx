// @flow strict

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { App } from '@/App/App';

export function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
