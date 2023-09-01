import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewCartQuery } from '@/redux/api/cartApi';
import MainDrawer from '@/components/drawer/main/MainDrawer';
import SearchDrawer from '@/components/drawer/search/SearchDrawer';

const HeaderMobileTop = () => {
  const { data } = useViewCartQuery(null);

  return (
    <div className={styles.header__top}>
      <div>
        <MainDrawer />
      </div>
      <Link href='/' className={styles.header__logo}>
        MOD
      </Link>
      <div>
        <SearchDrawer />
        <Link href='/favorites'>
          <Image src='/static/media/heart.svg' alt='' width={16} height={16} />
        </Link>
        <Link href='/cart'>
          <Image src='/static/media/bag.svg' alt='' width={16} height={16} />
          <span>{data?.products.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobileTop;
