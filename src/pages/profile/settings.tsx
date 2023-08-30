import styles from '@/styles/Profile.module.scss';

import Switch from '@mui/material/Switch';

import ProfileLayout from '@/components/layout/ProfileLayout';
import Button from '@/components/custom/button/Button';

const classes = {
  thumb: styles.profile__thumb,
  track: styles.profile__track,
};

const ProfileSettings = () => {
  return (
    <ProfileLayout>
      <div className={styles.profile__settings}>
        <h2 className={styles.profile__title}>НАСТРОЙКИ</h2>
        <form>
          <label htmlFor='notifications'>
            УВЕДОМЛЕНИЯ
            <Switch id='notifications' classes={classes} />
          </label>
          <label htmlFor='newsletter'>
            ПОДПИСКА НА РАССЫЛКУ
            <Switch id='newsletter' classes={classes} />
          </label>
          <div className={styles.profile__buttons}>
            <Button dark type='submit'>
              СОХРАНИТЬ
            </Button>
            <Button>ОТМЕНА</Button>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default ProfileSettings;
