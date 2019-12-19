// @flow strict

import React, { type Node } from 'react';

import './Layout.scss';

const css = {
  layout: 'mpt-layout',
  header: 'mpt-layout__header',
  main: 'mpt-layout__main',
};

type PropsType = $ReadOnly<{
  children: Node,
}>;

export function Layout(props: PropsType) {
  const { children } = props;

  return <div className={css.layout}>{children}</div>;
}

Layout.Header = ({ children }: { children: Node }) => <div className={css.header}>{children}</div>;

Layout.Main = ({ children }: { children: Node }) => <div className={css.main}>{children}</div>;
