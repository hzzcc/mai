import {
  DatlasTheme,
  type ThemeMode,
  useThemeController,
} from '@mai/components/theme';
import type { Preview } from '@storybook/react';
import React from 'react';

const ThemeProvider = ({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) => {
  const { setThemeMode } = useThemeController();
  React.useEffect(() => {
    setThemeMode(theme as ThemeMode);
  }, [setThemeMode, theme]);
  return children;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'light';

      return (
        <DatlasTheme initialTheme={selectedTheme}>
          <ThemeProvider theme={selectedTheme}>
            <Story />
          </ThemeProvider>
        </DatlasTheme>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Theme for the component',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
};

export default preview;
