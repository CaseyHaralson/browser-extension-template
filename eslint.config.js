const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {ignores: ['node_modules/**', 'build/**']},
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {...globals.browser, ...globals.node},
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  }
);
