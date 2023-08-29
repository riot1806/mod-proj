import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useDrawerContext } from '@/hooks/useDrawerContext';
import SecLayout from './SecLayout';
import ProfileDrawer from '../drawer/profile/ProfileDrawer';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const { setOpen } = useDrawerContext();
  const isMobile = useIsMobile();
  const router = useRouter();

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
        {isMobile && <ProfileDrawer>{children}</ProfileDrawer>}
      </div>
    </SecLayout>
  );
};

export default ProfileLayout;
