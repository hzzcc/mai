# 包架构说明

## 公共包结构

### @mai/api
API 客户端和请求工具
- 用途：统一的 API 请求封装、拦截器、错误处理
- 依赖：无 React 依赖，纯工具类

### @mai/utils
通用工具函数
- 用途：格式化、验证、数据处理等纯函数
- 依赖：无 React 依赖

### @mai/models
数据模型和类型定义
- 用途：TypeScript 类型、接口定义、数据模型
- 依赖：无运行时依赖，仅类型定义

### @mai/hooks
通用 React Hooks
- 用途：可复用的通用 hooks（如 useLocalStorage, useDebounce, useThrottle）
- 依赖：React
- **注意**：功能相关的 hooks（如 useThemeController）应放在对应的功能包中

### @mai/components
基础 UI 组件库
- 用途：通用 UI 组件（Button, Input, Theme 等）
- 依赖：React

### @mai/i18n
国际化（i18n）支持
- 用途：多语言翻译、语言切换
- 依赖：React
- **架构**：使用 Context Provider 模式（与 theme 保持一致）

### @mai/business-components
业务组件
- 用途：业务相关的组件和功能
- 依赖：@mai/components, React

## Hooks 放置策略

### 放在 @mai/hooks
- ✅ 通用工具类 hooks：useLocalStorage, useDebounce, useThrottle, useClickOutside 等
- ✅ 与业务无关的通用 hooks

### 放在功能包中
- ✅ 功能相关 hooks：如 `useThemeController` 放在 `@mai/components/theme`
- ✅ 与特定功能紧密耦合的 hooks

### 放在 @mai/business-components
- ✅ 业务相关 hooks：如 `useUserProfile`, `useOrderList` 等
- ✅ 只在业务场景使用的 hooks

## Controllers 放置策略

### 放在功能包中
- ✅ 功能状态控制器：如 `ThemeController` 放在 `@mai/components/theme`
- ✅ 与特定功能模块紧密相关的控制器

### 放在 @mai/business-components
- ✅ 业务逻辑控制器：如 `UserController`, `OrderController` 等
- ✅ 处理业务流程和状态管理的控制器

### 放在 @mai/utils（可选）
- ✅ 通用控制器模式/工具类：如果只是工具函数而非状态管理
- ⚠️ 一般不推荐，优先考虑放在对应的功能包或业务包

## 国际化（i18n）策略

### 使用 Context Provider（推荐）
- ✅ **全局配置**：使用 `I18nProvider` 包裹应用，与 `DatlasTheme` 类似
- ✅ **统一管理**：所有翻译集中管理，便于维护
- ✅ **类型安全**：支持嵌套 key 路径（如 `common.button.submit`）
- ✅ **参数替换**：支持 `{{name}}` 占位符替换
- ✅ **回退机制**：支持 fallback locale

### 不推荐组件内处理
- ❌ 每个组件单独处理翻译会导致：
  - 翻译分散，难以维护
  - 语言切换需要重新渲染所有组件
  - 无法统一管理语言资源

### 使用方式

```typescript
// 1. 在应用根组件包裹 I18nProvider
import { I18nProvider } from '@mai/i18n';
import { zhCN, enUS } from '@mai/i18n/locales';

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
  <App />
</I18nProvider>

// 2. 在组件中使用
import { useI18n } from '@mai/i18n';

function MyComponent() {
  const { t, locale, setLocale } = useI18n();
  
  return (
    <div>
      <button>{t('common.button.submit')}</button>
      <p>{t('user.profile', { name: 'John' })}</p>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="zh-CN">中文</option>
        <option value="en-US">English</option>
      </select>
    </div>
  );
}
```

## 依赖关系

```
@mai/models (无依赖)
    ↑
@mai/utils (无依赖)
    ↑
@mai/api (可能依赖 @mai/models, @mai/utils)
    ↑
@mai/hooks (依赖 React)
@mai/i18n (依赖 React)
    ↑
@mai/components (依赖 React, 可能依赖 @mai/hooks, @mai/i18n)
    ↑
@mai/business-components (依赖 @mai/components, React)
    ↑
apps/* (依赖所有包)
```

## 使用示例

```typescript
// 通用 hooks
import { useLocalStorage, useDebounce } from '@mai/hooks';

// 功能相关 hooks
import { useThemeController } from '@mai/components/theme';

// 业务 hooks（未来）
import { useUserProfile } from '@mai/business-components/user-profile';

// API
import { createApiClient } from '@mai/api';

// 模型
import { User, UserProfile } from '@mai/models';

// 工具
import { formatDate, isEmail } from '@mai/utils';

// 国际化
import { I18nProvider, useI18n } from '@mai/i18n';
import { zhCN, enUS } from '@mai/i18n/locales';
```

