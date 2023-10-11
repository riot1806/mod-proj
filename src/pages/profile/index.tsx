import styles from '@/styles/Profile.module.scss';

import { useGetLS } from '@/hooks/ls';
import ProfileLayout from '@/components/layout/ProfileLayout';
import ProfileForm from '@/components/view/profile-form/ProfileForm';

const Profile = () => {
  const isAuth = useGetLS('token');

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile}>
        <h2 className={styles.profile__title}>МОИ ДАННЫЕ</h2>
        <strong>
          Сохраняйте понравившиеся вам товары и проверяйте их наличие
        </strong>
        <p>
          Из обзора учетной записи пользователя можно просматривать последние
          операции и редактировать данные учетной записи пользователя. Выберите
          одну из приведенных ниже ссылок, чтобы просмотреть или отредактировать
          информацию.
        </p>
        <ProfileForm styles={styles} />
      </div>
    </ProfileLayout>
  );
};

export default Profile;
