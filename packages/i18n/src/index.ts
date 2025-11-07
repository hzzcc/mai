export { I18nProvider } from './i18n-provider';
export { useI18n } from './i18n-provider';
export type { I18nConfig, I18nContextValue, Locale, TranslationKey } from './types';
export { zhCN, enUS } from './locales';

// 导出翻译类型以便类型推断
export type Translations = typeof zhCN;

