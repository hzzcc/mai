import { useMemo, type ReactNode } from 'react';
import i18n from 'i18next';
import {
  I18nextProvider,
  useTranslation,
  initReactI18next,
} from 'react-i18next';
import type { I18nConfig, Locale } from './types';
import { defaultNS } from './resources';
import './i18next.d.ts';

export interface I18nProviderProps {
  config: I18nConfig;
  children: ReactNode;
}

export function I18nProvider({ config, children }: I18nProviderProps) {
  const i18nInstance = useMemo(() => {
    const instance = i18n.createInstance();

    // Initialize i18next with react-i18next
    instance.use(initReactI18next).init({
      lng: config.defaultLocale,
      fallbackLng: config.fallbackLocale || config.defaultLocale,
      supportedLngs: config.locales,
      resources: config.translations,
      defaultNS,
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      react: {
        useSuspense: false,
      },
      pluralSeparator: '_',
      keySeparator: '.',
      initImmediate: true,
    });

    return instance;
  }, [config]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}

/**
 * Hook to access i18n context
 */
export function useI18n() {
  const { t, i18n: i18nextI18n } = useTranslation();

  const locale = i18nextI18n.language as Locale;

  const changeLocale = (newLocale: Locale) => {
    i18nextI18n.changeLanguage(newLocale);
  };

  return {
    locale,
    setLocale: changeLocale,
    changeLocale,
    t,
    i18n: {
      formatDate: (
        date: Date | number,
        options?: Intl.DateTimeFormatOptions,
      ) => {
        return new Intl.DateTimeFormat(locale, options).format(date);
      },
      formatNumber: (number: number, options?: Intl.NumberFormatOptions) => {
        return new Intl.NumberFormat(locale, options).format(number);
      },
      formatCurrency: (
        amount: number,
        currency?: string,
        options?: Intl.NumberFormatOptions,
      ) => {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency || 'USD',
          ...options,
        }).format(amount);
      },
      formatRelativeTime: (
        value: number,
        unit?: Intl.RelativeTimeFormatUnit,
        options?: Intl.RelativeTimeFormatOptions,
      ) => {
        return new Intl.RelativeTimeFormat(locale, {
          numeric: 'auto',
          ...options,
        }).format(value, unit || 'day');
      },
    },
    availableLocales: (i18nextI18n.options.supportedLngs as Locale[]) || [
      locale,
    ],
  };
}
