export type Locale = string;

// 从嵌套对象中提取所有可能的 key 路径
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? ObjectType[Key] extends { [key: string]: any }
      ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
      : `${Key}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// 从翻译对象中提取 key 类型
export type TranslationKey<T extends Record<string, any> = Record<string, any>> = NestedKeyOf<T>;

export interface Translations {
  [key: string]: string | Translations;
}

export interface I18nConfig<T extends Record<string, any> = Record<string, any>> {
  defaultLocale: Locale;
  locales: Locale[];
  translations: Record<Locale, T>;
  fallbackLocale?: Locale;
}

export interface I18nContextValue<T extends Record<string, any> = Record<string, any>> {
  /**
   * Current locale
   */
  locale: Locale;

  /**
   * Set locale
   */
  setLocale: (locale: Locale) => void;

  /**
   * Translate function with type-safe keys
   */
  t: (key: TranslationKey<T>, params?: Record<string, string | number>) => string;

  /**
   * Get available locales
   */
  availableLocales: Locale[];
}

