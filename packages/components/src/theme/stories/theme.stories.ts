import { DatlasTheme } from '@mai/components/theme';
import type { Meta } from '@storybook/react';
import {
  DarkTheme,
  InteractiveThemeExample,
  LightTheme,
} from './theme.compositions';

const meta: Meta<typeof DatlasTheme> = {
  title: 'Components/Theme/DatlasTheme',
  component: DatlasTheme,
  tags: ['autodocs'],
};

export default meta;

export const Light = LightTheme;

export const Dark = DarkTheme;

export const Interactive = InteractiveThemeExample;
