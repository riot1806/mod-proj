import styles from '../styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewCartQuery } from '@/redux/api/cartApi';
import Navigation from '@/components/navigation/Navigation';

const HeaderMiddle = () => {
  const { data } = useViewCartQuery(null);

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
        </li>
        <li>
          <Link href='/cart'>
            <Image src='/static/media/bag.svg' alt='' fill />
            Корзина
          </Link>
          <span>{data?.products.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
