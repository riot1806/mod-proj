import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useDrawerContext } from '@/hooks/useDrawerContext';
import SecLayout from './SecLayout';
import ProfileDrawer from '../drawer/profile/ProfileDrawer';
import { useGetUserQuery } from '@/redux/api/userApi';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetUserQuery(null);
  const { setOpen } = useDrawerContext();
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const jsx = (
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
          <li>
            <button onClick={handleLogout}>Выйти</button>
          </li>
        </ul>
      </nav>
      <div className={styles.profile__right}>{children}</div>
      {isMobile && <ProfileDrawer>{children}</ProfileDrawer>}
    </div>
  );

  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobile) {
        setOpen(true);
      }

      return;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

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
    <SecLayout title={`ЗДРАВСТВУЙТЕ ${data?.first_name.toUpperCase()}`}>
      {jsx}
    </SecLayout>
  );
};

export default ProfileLayout;
