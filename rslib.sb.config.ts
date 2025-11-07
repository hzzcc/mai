import { defineConfig } from '@rslib/core';
import { plugins } from './rslib.config';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  resolve: {
    alias: {
      '@mai/components': './packages/components/src',
      '@mai/business-components': './packages/business-components/src',
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: plugins,
});
