# @mai/i18n

国际化（i18n）支持包，使用 Context Provider 模式，与 `@mai/components/theme` 保持一致的架构风格。

## 特性

- ✅ Context Provider 模式（全局配置）
- ✅ 嵌套 key 路径支持（如 `common.button.submit`）
- ✅ 参数替换（`{{name}}` 占位符）
- ✅ 回退语言支持
- ✅ TypeScript 类型安全

## 使用方式

### 1. 配置 Provider

```tsx
import { I18nProvider } from '@mai/i18n';
import { zhCN, enUS } from '@mai/i18n/locales';

function App() {
  return (
    <I18nProvider
      config={{
        defaultLocale: 'zh-CN',
        locales: ['zh-CN', 'en-US'],
        translations: {
          'zh-CN': zhCN,
          'en-US': enUS,
        },
        fallbackLocale: 'en-US',
      }}
    >
      {/* 你的应用 */}
    </I18nProvider>
  );
}
```

### 2. 在组件中使用

```tsx
import { useI18n } from '@mai/i18n';

function MyComponent() {
  const { t, locale, setLocale, availableLocales } = useI18n();

  return (
    <div>
      <h1>{t('common.message.success')}</h1>
      <button>{t('common.button.submit')}</button>
      <p>{t('user.profile', { name: 'John' })}</p>
      
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        {availableLocales.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
}
```

### 3. 添加新语言

在 `src/locales/` 目录下创建新的语言文件：

```typescript
// src/locales/ja-JP.ts
export const jaJP = {
  common: {
    button: {
      submit: '送信',
      cancel: 'キャンセル',
    },
  },
} as const;
```

然后在配置中引入：

```typescript
import { jaJP } from '@mai/i18n/locales/ja-JP';

<I18nProvider
  config={{
    defaultLocale: 'ja-JP',
    locales: ['zh-CN', 'en-US', 'ja-JP'],
    translations: {
      'zh-CN': zhCN,
      'en-US': enUS,
      'ja-JP': jaJP,
    },
  }}
>
```

## API

### I18nProvider

| 属性 | 类型 | 说明 |
|------|------|------|
| config | `I18nConfig` | 国际化配置 |
| children | `ReactNode` | 子组件 |

### useI18n()

返回 `I18nContextValue`：

| 属性 | 类型 | 说明 |
|------|------|------|
| locale | `Locale` | 当前语言 |
| setLocale | `(locale: Locale) => void` | 设置语言 |
| t | `(key: string, params?: Record<string, string \| number>) => string` | 翻译函数 |
| availableLocales | `Locale[]` | 可用语言列表 |

## 翻译 Key 格式

支持嵌套路径，使用点号分隔：

```typescript
// 翻译文件
{
  common: {
    button: {
      submit: '提交'
    }
  }
}

// 使用
t('common.button.submit') // => '提交'
```

## 参数替换

支持 `{{key}}` 占位符：

```typescript
// 翻译文件
{
  user: {
    greeting: 'Hello, {{name}}!'
  }
}

// 使用
t('user.greeting', { name: 'John' }) // => 'Hello, John!'
```

