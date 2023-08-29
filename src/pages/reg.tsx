import styles from '@/styles/Login.module.scss';

import SecLayout from '@/components/layout/SecLayout';
import RegModal from '@/components/modal/reg/RegModal';

const Reg = () => {
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
