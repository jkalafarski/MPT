// @flow strict

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isLogged } from '@/authentication/login';

import { Layout } from '@/Layout';
import { HeaderUnlog, HeaderLog } from '@/Header';

import { HomePage } from '@/HomePage/HomePage';
import { SignInPage } from '@/SignInPage/SignInPage';

export function App() {
  return (
    <Switch>
      <Route
        path="/prices"
        render={() => (
          <Layout>
            <Layout.Header>{isLogged() ? <HeaderLog /> : <HeaderUnlog />}</Layout.Header>

            <Layout.Main>
              <div>Prices</div>
            </Layout.Main>
          </Layout>
        )}
      />

      <Route
        path="/about"
        render={() => (
          <Layout>
            <Layout.Header>{isLogged() ? <HeaderLog /> : <HeaderUnlog />}</Layout.Header>

            <Layout.Main>
              <div>About</div>
            </Layout.Main>
          </Layout>
        )}
      />

      <Route
        path="/help"
        render={() => (
          <Layout>
            <Layout.Header>{isLogged() ? <HeaderLog /> : <HeaderUnlog />}</Layout.Header>

            <Layout.Main>
              <div>Help</div>
            </Layout.Main>
          </Layout>
        )}
      />

      <Route
        path="/signup"
        render={() => (
          <Layout>
            <Layout.Header>{isLogged() ? <HeaderLog /> : <HeaderUnlog />}</Layout.Header>

            <Layout.Main>
              <div>Signup</div>
            </Layout.Main>
          </Layout>
        )}
      />

      <Route
        path="/signin"
        render={() => {
          if (isLogged()) return <Redirect to="/main" />;

          return (
            <Layout>
              <Layout.Header>
                <HeaderUnlog />
              </Layout.Header>

              <Layout.Main>
                <SignInPage />
              </Layout.Main>
            </Layout>
          );
        }}
      />

      <Route
        path="/main"
        render={() => {
          if (!isLogged()) return <Redirect to="/signin" />;

          return (
            <Layout>
              <Layout.Header>
                <HeaderLog />
              </Layout.Header>

              <Layout.Main>
                <div>Main</div>
              </Layout.Main>
            </Layout>
          );
        }}
      />

      <Route
        path="/"
        render={() => {
          if (isLogged()) return <Redirect to="/main" />;

          return (
            <Layout>
              <Layout.Header>
                <HeaderUnlog />
              </Layout.Header>

              <Layout.Main>
                <HomePage />
              </Layout.Main>
            </Layout>
          );
        }}
      />
    </Switch>
  );
}
