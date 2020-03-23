module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    'consistent-this': ['error', 'self'],
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': 'off',
    'no-shadow': 'off',
    'no-used': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-one-expression-per-line': 'off',
    'no-case-declarations': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/no-direct-mutation-state': 'error',
    'react/sort-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/no-direct-mutation-state': 'error',
    'import/named': 'off',
    'no-alert': 'off',
    'react/sort-prop-types': 'error',

    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
      },
    ], // airbnb is allowing some edge cases
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [
    {
      files: ['*.test.js', '*.stories.js'],
      rules: {
        'prefer-promise-reject-errors': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
}
