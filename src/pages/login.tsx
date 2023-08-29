import styles from '@/styles/Login.module.scss';

import SecLayout from '@/components/layout/SecLayout';
import LoginModal from '@/components/modal/login/LoginModal';

const Login = () => {
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
