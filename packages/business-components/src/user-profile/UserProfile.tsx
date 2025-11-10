import { Button } from '@mai/components/button';
import { useI18n } from '@mai/i18n';

export const UserProfile = () => {
  const { t } = useI18n();
  return <Button label={t('user.name', { name: 'John' })} primary />;
};
