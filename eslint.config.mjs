// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['**/dist/', 'storybook-static/', '**/cjs/', '**/esm/'] },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn', // Treat unused variables as warnings
        {
          argsIgnorePattern: '^_', // Ignore unused arguments starting with an underscore
          varsIgnorePattern: '^_', // Ignore unused variables starting with an underscore
          caughtErrorsIgnorePattern: '^_', // Ignore unused catch clause parameters starting with an underscore
          ignoreRestSiblings: true, // Ignore unused properties when using object destructuring
        },
      ],
    },
  },
  ...storybook.configs["flat/recommended"]
];
