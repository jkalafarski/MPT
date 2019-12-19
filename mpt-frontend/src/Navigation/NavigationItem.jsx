// @flow strict

import React from 'react';
import { Link } from 'react-router-dom';

const css = {
  item: 'mpt-navigation-item',
};

type PropsType = $ReadOnly<{
  label: string,
  onClick: () => mixed,
}>;

export function NavigationItem(props: PropsType) {
  const { label, onClick } = props;

  return (
    <div className={css.item} onClick={onClick}>
      {label}
    </div>
  );
}
