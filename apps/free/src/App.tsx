import './App.css';

import { BrowserRouter, Link } from 'react-router-dom';

import { AppProvider } from '@mai/business-components/provider/AppProvider';
import { UserProfile } from '@mai/business-components/user-profile';
import { Button } from '@mai/components/button';
import { TextInput } from '@mai/components/inputs/text-input';
import { useThemeController } from '@mai/components/theme';
import { useI18n, Trans } from '@mai/i18n';

const AppContent = () => {
  const {
    t,
    locale,
    setLocale,
    i18n: { formatNumber },
  } = useI18n();

  const { themeMode, setThemeMode } = useThemeController();

  const count = 10;
  const name = 'John';
  return (
    <main className="main">
      <div className="content">
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <label>{t('common.language')}: </label>
          <Button
            label="中文"
            primary={locale === 'zh-CN'}
            onClick={() => setLocale('zh-CN')}
          ></Button>
          <Button
            label="English"
            primary={locale === 'en-US'}
            onClick={() => setLocale('en-US')}
          ></Button>
          <label>{t('common.theme')}: </label>
          <Button
            label="Light"
            primary={themeMode === 'light'}
            onClick={() => setThemeMode('light')}
          ></Button>
          <Button
            label="Dark"
            primary={themeMode === 'dark'}
            onClick={() => setThemeMode('dark')}
          ></Button>
        </div>
        <p>{t('common.welcome')}</p>
        <TextInput placeholder={t('common.placeholder.input')} />
        <UserProfile />
        <p>
          <Trans
            i18nKey="user.userMessagesUnread"
            values={{ name, count }}
            components={[
              <strong key="name" title={t('user.nameTitle')} />,
              <Link key="link" to="/" />,
            ]}
          />
        </p>
        <p>{formatNumber(1000000, { style: 'currency', currency: 'CNY' })}</p>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
