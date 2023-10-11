import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useDrawerContext } from '@/hooks/useDrawerContext';
import { useGetUserQuery } from '@/redux/api/userApi';
import SecLayout from './SecLayout';
import ProfileDrawer from '../drawer/profile/ProfileDrawer';

const routes: { label: string; value: string }[] = [
  { label: 'МОИ ДАННЫЕ', value: '/profile' },
  { label: 'МОИ КАРТЫ', value: '/profile/cards' },
  { label: 'МОИ ЗАКАЗЫ', value: '/profile/orders' },
  { label: 'МОИ АДРЕСА', value: '/profile/addresses' },
  { label: 'ИЗБРАННЫЕ', value: '/profile/favorites' },
  { label: 'НАСТРОЙКИ', value: '/profile/settings' },
  { label: 'ЦЕНТР ПОДДЕРЖКИ MOD', value: '/support' },
];

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetUserQuery(null);
  const { setOpen } = useDrawerContext();
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleRoute = (route: string) => {
    if (isMobile) return router.push(route).then(() => setOpen(true));
    return;
  };

  const jsx = (
    <div className={styles.profile__layout}>
      <nav className={styles.profile__left}>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.value} onClick={() => handleRoute(route.value)}>
                {route.label}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={handleLogout}>Выйти</button>
          </li>
        </ul>
      </nav>
      <div className={styles.profile__right}>{children}</div>
      {isMobile && <ProfileDrawer>{children}</ProfileDrawer>}
    </div>
  );

  return isMobile ? (
    <section>
      <div className={styles.profile__layout_avatar}>
        <Image src='/static/media/user.png' alt='' width={60} height={60} />
        <p>
          ЗДРАВСТВУЙТЕ, <b>{data?.first_name}</b>
        </p>
        <p>
          <small>Этот раздел создан специально для вас</small>
        </p>
      </div>
      {jsx}
    </section>
  ) : (
    <SecLayout title={`ЗДРАВСТВУЙТЕ ${data?.first_name?.toUpperCase()}`}>
      {jsx}
    </SecLayout>
  );
};

export default ProfileLayout;
