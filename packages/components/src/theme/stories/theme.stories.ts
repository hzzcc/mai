import type { Meta } from 'storybook-react-rsbuild';

import { DatlasTheme } from '@mai/components/theme';


import {
  DarkTheme,
  InteractiveThemeExample,
  LightTheme,
} from './theme.compositions';

const meta: Meta<typeof DatlasTheme> = {
  title: 'Theme/DatlasTheme',
  component: DatlasTheme,
  tags: ['autodocs'],
};

export default meta;

export const Light = LightTheme;

export const Dark = DarkTheme;

export const Interactive = InteractiveThemeExample;
