import './App.css';
import { TextInput } from '@mai/components/inputs/text-input';
import { DatlasTheme } from '@mai/components/theme';
import { UserProfile } from '@mai/business-components/user-profile';
import { I18nProvider, zhCN, enUS, useI18n, type Translations } from '@mai/i18n';

const AppContent = () => {
  const { t, locale, setLocale } = useI18n<Translations>();

  return (
    <div className="content">
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label>{t('common.language')}: </label>
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="zh-CN">中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
      <p>{t('common.welcome')}</p>
      <TextInput placeholder={t('common.placeholder.input')} />
      <UserProfile />
    </div>
  );
};

const App = () => {
  return (
    <I18nProvider<Translations>
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
      <DatlasTheme initialTheme="light">
        <AppContent />
      </DatlasTheme>
    </I18nProvider>
  );
};

export default App;
