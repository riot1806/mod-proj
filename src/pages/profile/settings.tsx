import styles from '@/styles/Profile.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import Switch from '@mui/material/Switch';

import { useGetUserQuery, useUpdateUserMutation } from '@/redux/api/userApi';
import ProfileLayout from '@/components/layout/ProfileLayout';
import Button from '@/components/custom/button/Button';

const classes = {
  thumb: styles.profile__thumb,
  track: styles.profile__track,
};

type Inputs = {
  notifications: boolean;
  newsletter: boolean;
};

const ProfileSettings = () => {
  const { data: userData } = useGetUserQuery(null);
  const [updateUser] = useUpdateUserMutation();
  const { handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateUser({
      ...userData,
      birthday: userData?.birthday?.slice(0, 10),
      notifications: data.notifications,
      newsletter: data.newsletter,
    });
  };

  return (
    <ProfileLayout>
      <div className={styles.profile__settings}>
        <h2 className={styles.profile__title}>НАСТРОЙКИ</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='notifications'>
            УВЕДОМЛЕНИЯ
            <Switch
              id='notifications'
              classes={classes}
              defaultChecked={userData?.notifications!}
              onChange={(event) =>
                setValue('notifications', event.target.checked)
              }
            />
          </label>
          <label htmlFor='newsletter'>
            ПОДПИСКА НА РАССЫЛКУ
            <Switch
              id='newsletter'
              classes={classes}
              defaultChecked={userData?.newsletter!}
              onChange={(event) => setValue('newsletter', event.target.checked)}
            />
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
