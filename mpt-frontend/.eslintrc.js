module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb',
    'plugin:eslint-plugin-prettier/recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-use-before-define': 'off'
  }
};