// @flow strict

import React from 'react';
import { useHistory } from 'react-router-dom';

import './Navigation.scss';
import { NavigationItem } from './NavigationItem';

const css = {
  nav: 'mpt-navigation',
};

type NavigationItemDataType = $ReadOnly<{
  label: string,
  linkTo: string,
}>;

type PropsType = $ReadOnly<{
  items: $ReadOnlyArray<NavigationItemDataType>,
}>;

export function Navigation(props: PropsType) {
  const { items } = props;

  const history = useHistory();

  return (
    <div className={css.nav}>
      {items.map(item => (
        <NavigationItem
          key={item.label}
          label={item.label}
          onClick={() => history.push(item.linkTo)}
        />
      ))}
    </div>
  );
}
