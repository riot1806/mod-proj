import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

import Link from 'next/link';

import SecLayout from './SecLayout';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SecLayout title='ЗДРАВСТВУЙТЕ'>
      <div className={styles.profile__layout}>
        <nav className={styles.profile__left}>
          <ul>
            <li>
              <Link href='/profile'>МОИ ДАННЫЕ</Link>
            </li>
            <li>
              <Link href='/profile/cards'>МОИ КАРТЫ</Link>
            </li>
            <li>
              <Link href='/profile/orders'>МОИ ЗАКАЗЫ</Link>
            </li>
            <li>
              <Link href='/profile/addresses'>МОИ АДРЕСА</Link>
            </li>
            <li>
              <Link href='/favorites'>ИЗБРАННЫЕ</Link>
            </li>
            <li>
              <Link href='/profile/settings'>НАСТРОЙКИ</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.profile__right}>{children}</div>
      </div>
    </SecLayout>
  );
};

export default ProfileLayout;
