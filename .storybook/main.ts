import { dirname, join } from 'node:path';
import type { StoriesEntry } from 'storybook/internal/types';
import type { AddonOptions } from 'storybook-addon-rslib';
import type { StorybookConfig } from 'storybook-react-rsbuild';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ] as StoriesEntry[],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: getAbsolutePath('storybook-addon-rslib'),
      options: {
        rslib: {
          configPath: './rslib.sb.config.ts',
        },
      } as AddonOptions,
    },
  ],
  framework: {
    name: getAbsolutePath('storybook-react-rsbuild'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: true,
  },
};

export default config;
