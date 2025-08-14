import { merge } from 'lodash';
import type React from 'react';
import { useMemo } from 'react';
import type { CreateThemeOptions } from './create-theme';

export type ThemeProviderProps<T> = {
  overrides?: Partial<T>;
} & React.HTMLAttributes<HTMLDivElement>;

export type ThemeProviderType<T> = React.ComponentType<ThemeProviderProps<T>>;

function createKey(key: string, formerKey?: string) {
  if (!formerKey) return key;
  return `${formerKey}.${key}`;
}

export function listTokens<T>(theme: T, formerKey?: string) {
  const entries = Object.entries(theme as object);
  const tokens: Array<Array<string>> = entries.flatMap(([key, value]) => {
    const tokenKey = createKey(key, formerKey);
    if (typeof value === 'object') return listTokens(value, tokenKey);
    return [[tokenKey, value]];
  });

  return tokens;
}

export function tokenToCssVar(token: string, value: string, prefix?: string) {
  const varName = token
    .replace(/\./g, '-')
    .replace(/[A-Z]/g, '-$&')
    .toLowerCase();
  const varKey = prefix ? `--${prefix}-${varName}` : `--${varName}`;
  return [varKey, value];
}

export function computeCssVars<T>(
  theme: T,
  prefix?: string,
): React.CSSProperties {
  const tokens = listTokens(theme);
  return tokens
    .map(([key, val]) => {
      return tokenToCssVar(key, val, prefix);
    })
    .reduce<Record<string, string>>((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
}

export function createThemeProvider<T>(
  ThemeContext: React.Context<T>,
  options: CreateThemeOptions<T>,
) {
  return ({ children, overrides, style, ...rest }: ThemeProviderProps<T>) => {
    const theme = useMemo(() => {
      const merged = merge({}, options.theme || {}, overrides);

      return merged as T;
    }, [options.theme, overrides]);

    if (options.withoutCssVars)
      return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      );
    const cssVars = computeCssVars<T>(theme, options.prefix);

    return (
      <div style={{ ...cssVars, ...style }} {...rest}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </div>
    );
  };
}
