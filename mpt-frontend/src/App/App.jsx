import React from 'react';

import { AuthenticationDataProvider } from '@/authentication';

import { Layout } from '@/Layout';
import { Header } from '@/Header';
import { Main } from '@/Main';

export function App() {
  return (
    <AuthenticationDataProvider>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>

        <Layout.Main>
          <Main />
        </Layout.Main>
      </Layout>
    </AuthenticationDataProvider>
  );
}
