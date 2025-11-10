import type { useTranslation } from 'react-i18next';

import type { Resources } from './resources';

export type Locale = 'zh-CN' | 'en-US';
export interface I18nConfig {
  defaultLocale: Locale;
  locales: Locale[];
  translations: Resources;
  fallbackLocale?: Locale;
}

export interface I18nContextValue {
  /**
   * Current locale
   */
  locale: Locale;

  /**
   * Set locale (alias for changeLocale)
   */
  setLocale: (locale: Locale) => void;

  /**
   * Change locale
   */
  changeLocale: (locale: Locale) => void;

  /**
   * Translate function with type-safe keys and parameters
   * Uses react-i18next's built-in type system
   */
  t: ReturnType<typeof useTranslation>['t'];

  /**
   * I18n instance for advanced formatting
   */
  i18n: {
    formatDate: (
      date: Date | number,
      options?: Intl.DateTimeFormatOptions,
    ) => string;
    formatNumber: (
      number: number,
      options?: Intl.NumberFormatOptions,
    ) => string;
    formatCurrency: (
      amount: number,
      currency?: string,
      options?: Intl.NumberFormatOptions,
    ) => string;
    formatRelativeTime: (
      value: number,
      unit?: Intl.RelativeTimeFormatUnit,
      options?: Intl.RelativeTimeFormatOptions,
    ) => string;
  };

  /**
   * Get available locales
   */
  availableLocales: Locale[];
}
