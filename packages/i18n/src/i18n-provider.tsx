import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import type { I18nConfig, I18nContextValue, Locale, TranslationKey } from './types';

const I18nContext = createContext<I18nContextValue<any> | undefined>(undefined);

export interface I18nProviderProps<T extends Record<string, any> = Record<string, any>> {
  config: I18nConfig<T>;
  children: ReactNode;
}

/**
 * Get nested translation value by key path (e.g., "common.button.submit")
 */
function getNestedTranslation<T extends Record<string, any>>(
  translations: T,
  key: TranslationKey<T>,
): string | undefined {
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return undefined;
    }
  }

  return typeof value === 'string' ? value : undefined;
}

/**
 * Replace placeholders in translation string (e.g., "Hello {{name}}" -> "Hello John")
 */
function replaceParams(
  template: string,
  params?: Record<string, string | number>,
): string {
  if (!params) return template;

  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return params[key]?.toString() ?? match;
  });
}

export function I18nProvider<T extends Record<string, any>>({ config, children }: I18nProviderProps<T>) {
  const [locale, setLocaleState] = useState<Locale>(config.defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    if (config.locales.includes(newLocale)) {
      setLocaleState(newLocale);
    } else {
      console.warn(`Locale "${newLocale}" is not available. Available locales: ${config.locales.join(', ')}`);
    }
  }, [config.locales]);

  const t = useCallback(
    (key: TranslationKey<T>, params?: Record<string, string | number>): string => {
      const translations = config.translations[locale];
      
      if (!translations) {
        console.warn(`No translations found for locale: ${locale}`);
        return key;
      }

      let translation = getNestedTranslation(translations, key);

      // Fallback to fallbackLocale if translation not found
      if (!translation && config.fallbackLocale && config.fallbackLocale !== locale) {
        const fallbackTranslations = config.translations[config.fallbackLocale];
        if (fallbackTranslations) {
          translation = getNestedTranslation(fallbackTranslations, key);
        }
      }

      // If still not found, return the key itself
      if (!translation) {
        console.warn(`Translation key not found: ${key} (locale: ${locale})`);
        return key;
      }

      return replaceParams(translation, params);
    },
    [locale, config.translations, config.fallbackLocale],
  );

  const contextValue: I18nContextValue<T> = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      availableLocales: config.locales,
    }),
    [locale, setLocale, t, config.locales],
  );

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to access i18n context with type-safe translation keys
 */
export function useI18n<T extends Record<string, any> = Record<string, any>>(): I18nContextValue<T> {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context as I18nContextValue<T>;
}

