import classNames from 'classnames';
import { type ReactNode, useCallback, useState } from 'react';
import './theme.scss';
import {
  ThemeContext,
  type ThemeContextValue,
  type ThemeMode,
} from './theme-controller';
import { themeOptions } from './theme-options';
import { DatlasThemeProvider } from './theme-provider';
import type { DatlasThemeSchema } from './tokens';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DatlasThemeProps = {
  /**
   * a root ReactNode for the component tree
   * applied with the theme.
   */
  children?: ReactNode;

  /**
   * inject a class name to override to the theme.
   * this allows people to affect your theme. remove to avoid.
   */
  className?: string;

  /**
   * override tokens in the schema
   */
  overrides?: DeepPartial<DatlasThemeSchema>;

  /**
   * preset of the theme.
   */
  initialTheme?: ThemeMode;

  /**
   * style tags to include.
   */
  style?: React.CSSProperties;
};

/**
 * A theme for the Datlas AI Page Builder.
 * It provides tokens, fonts and general styling for all components, with support for light and dark modes.
 */
export function DatlasTheme({
  children,
  initialTheme = 'light',
  className,
  style,
  overrides,
  ...rest
}: DatlasThemeProps) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialTheme);
  const themePreset = themeMode === 'dark' ? themeOptions.dark : {};

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  const finalOverrides = { ...themePreset, ...overrides };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <DatlasThemeProvider.ThemeProvider
        className={classNames('datlasTheme', className)}
        style={style}
        overrides={finalOverrides as Partial<DatlasThemeSchema>}
        {...rest}
      >
        {children}
      </DatlasThemeProvider.ThemeProvider>
    </ThemeContext.Provider>
  );
}
