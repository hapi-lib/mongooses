// https://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
    browser: false,
    es11: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  extends: ['plugin:prettier/recommended'],
};
