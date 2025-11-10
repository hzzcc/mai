// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['**/dist/', 'storybook-static/', '**/cjs/', '**/esm/'] },
  {
    plugins: {
      import: importPlugin,
    },
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
      'sort-imports': 'off', // 使用 import/order 替代，因为它支持自动修复
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom,react-router-dom}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@mai/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: [
            'react',
            'react-dom',
            'react-router-dom',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  ...storybook.configs['flat/recommended'],
];
