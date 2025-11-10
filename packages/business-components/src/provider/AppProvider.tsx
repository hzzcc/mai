import React from 'react';

import { DatlasTheme, useThemeController } from '@mai/components/theme';
import { I18nProvider, resources } from '@mai/i18n';

const ThemeObserverSystem = () => {
  const { setThemeMode } = useThemeController();
  /**
   * 监听系统主题变化
   */
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setThemeMode]);

  return null;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  return (
    <DatlasTheme initialTheme={theme}>
      <ThemeObserverSystem />
      {children}
    </DatlasTheme>
  );
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider
      config={{
        defaultLocale: window.navigator.language.startsWith('zh')
          ? 'zh-CN'
          : 'en-US',
        locales: ['zh-CN', 'en-US'],
        translations: resources,
        fallbackLocale: 'en-US',
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </I18nProvider>
  );
};
