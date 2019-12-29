module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    'react'
  ],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/no-onchange': 0,
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'never']
  },
  settings: {
    react: {
      version: '16'
    }
  }
}
