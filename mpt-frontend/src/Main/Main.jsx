import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, PricesPage, AboutPage, HelpPage, SignUpPage, SignInPage } from '@/pages';

export function Main() {
  return (
    <Switch>
      <Route path="/prices" component={PricesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}
