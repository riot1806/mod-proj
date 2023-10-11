import styles from '../styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewCartQuery } from '@/redux/api/cartApi';
import { useGetLS } from '@/hooks/ls';
import Navigation from '@/components/navigation/Navigation';
import { useReadLocalStorage } from 'usehooks-ts';

const HeaderMiddle = () => {
  const { data } = useViewCartQuery(null);
  const favorites: any = useReadLocalStorage('favorites');
  const isAuth = useGetLS('token');

  return (
    <div className={styles.header__middle}>
      <Navigation />
      <Link href='/' className={styles.header__logo}>
        MOD
      </Link>
      <ul className={styles.header__links}>
        <li>
          <Link href='/favorites'>
            <Image src='/static/media/heart.svg' alt='' fill />
            Избранное
          </Link>
          <span suppressHydrationWarning>{favorites?.length || 0}</span>
        </li>
        <li>
          <Link href='/cart'>
            <Image src='/static/media/bag.svg' alt='' fill />
            Корзина
          </Link>
          <span>{data?.products.length || 0}</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
