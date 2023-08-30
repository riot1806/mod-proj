import styles from '@/styles/Login.module.scss';

import { useRouter } from 'next/router';

import { useGetLS } from '@/hooks/ls';
import SecLayout from '@/components/layout/SecLayout';
import RegModal from '@/components/modal/reg/RegModal';

const Reg = () => {
  const isAuth = useGetLS('token');
  const router = useRouter();

  if (isAuth) return router.push('/profile');

  return (
    <SecLayout title='РЕГИСТРАЦИЯ'>
      <div className={styles.reg}>
        <p>ЗДРАВСТВУЙТЕ</p>
        <p>
          Чтобы воспользоваться всеми возможностями вам надо войти или
          зарегистрироваться
        </p>
        <RegModal />
      </div>
    </SecLayout>
  );
};

export default Reg;
