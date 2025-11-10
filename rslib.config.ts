import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig, type RslibConfig } from '@rslib/core';

export const plugins = [
  pluginReact(),
  pluginBabel({
    include: /\.(?:jsx|tsx)$/,
    babelLoaderOptions(opts) {
      opts.plugins?.unshift('babel-plugin-react-compiler');
    },
  }),
  pluginSass(),
];

export const getConfig = (config: Partial<RslibConfig> = {}) =>
  defineConfig({
    source: {
      entry: {
        index: [
          './src/**',
          '!**/*.json',
          '!**/*.spec.tsx',
          '!**/*.spec.ts',
          '!**/*.compositions.tsx',
          '!**/*.compositions.ts',
          '!**/*.stories.tsx',
          '!**/*.stories.ts',
          '!**/*.test.tsx',
          '!**/*.test.ts',
          '!**/*.md',
          '!**/*.mdx',
        ],
      },
      exclude: ['**/*.json'],
      tsconfigPath: './tsconfig.build.json',
    },
    ...config,
    lib: [
      {
        bundle: false,
        format: 'esm',
        dts: true,
        output: {
          cleanDistPath: true,
          distPath: {
            root: './esm',
          },
        },
      },
      {
        bundle: false,
        format: 'cjs',
        dts: true,
        output: {
          cleanDistPath: true,
          distPath: {
            root: './cjs',
          },
        },
      },
    ],
    output: {
      target: 'web',
    },
    plugins: plugins,
  });

export default getConfig();
