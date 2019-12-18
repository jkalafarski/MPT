// @flow strict

import React from 'react';

import { Layout } from '@/Layout';
import { Header } from '@/Header';
import { Main } from '@/Main';

export function App() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Main>
        <Main />
      </Layout.Main>
    </Layout>
  );
}
