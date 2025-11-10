import { defineConfig } from '@rsbuild/core';

import { plugins } from '../../rslib.config';

export default defineConfig({
  plugins: plugins,
  html: {
    title: 'Free',
  },
  output: {
    // relative path
    assetPrefix: './',
  },
});
