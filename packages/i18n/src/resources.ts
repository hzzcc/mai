import zhCNTranslation from './zh-CN/translation.json';
import enUSTranslation from './en-US/translation.json';

export const resources = {
  'zh-CN': {
    translation: zhCNTranslation,
  },
  'en-US': {
    translation: enUSTranslation,
  },
} as const;

export type Resources = typeof resources;

export const defaultNS = 'translation' as const;
