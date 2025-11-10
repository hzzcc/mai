import { resources, defaultNS } from './resources';

// Extend react-i18next types
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['zh-CN'];
  }
}
