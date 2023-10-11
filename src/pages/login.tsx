import styles from '@/styles/Login.module.scss';

import { useRouter } from 'next/router';

import { useGetLS } from '@/hooks/ls';
import SecLayout from '@/components/layout/SecLayout';
import LoginModal from '@/components/modal/login/LoginModal';

const Login = () => {
  const isAuth = useGetLS('token');
  const router = useRouter();

  if (isAuth) router.push('/profile');

  return (
    <SecLayout title='ЛОГИН'>
      <div className={styles.login}>
        <p>ЗДРАВСТВУЙТЕ</p>
        <p>
          Чтобы воспользоваться всеми возможностями вам надо войти или
          зарегистрироваться
        </p>
        <LoginModal />
      </div>
    </SecLayout>
  );
};

export default Login;
