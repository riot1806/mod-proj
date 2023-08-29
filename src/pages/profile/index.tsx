import styles from '@/styles/Profile.module.scss';

import ProfileLayout from '@/components/layout/ProfileLayout';
import ProfileForm from '@/components/view/profile-form/ProfileForm';

const Profile = () => {
  return (
    <ProfileLayout>
      <div className={styles.profile}>
        <h2>МОИ ДАННЫЕ</h2>
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
