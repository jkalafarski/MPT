module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb',
    'plugin:eslint-plugin-flowtype/recommended',
    'plugin:eslint-plugin-prettier/recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'import/no-default-export': 'error',
    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]*)+Type$'],
  }
};