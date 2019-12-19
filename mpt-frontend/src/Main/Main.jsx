// @flow strict

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '@/HomePage';
import { SignInPage } from '@/SignInPage';

export function Main() {
  return (
    <Switch>
      <Route path="/prices">
        <div>PricesPage</div>
      </Route>

      <Route path="/about">
        <div>AboutPage</div>
      </Route>

      <Route path="/help">
        <div>HelpPage</div>
      </Route>

      <Route path="/signup">
        <div>SignUpPage</div>
      </Route>

      <Route path="/signin">
        <SignInPage />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
