import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewCartQuery } from '@/redux/api/cartApi';
import { useGetLS } from '@/hooks/ls';
import MainDrawer from '@/components/drawer/main/MainDrawer';
import SearchDrawer from '@/components/drawer/search/SearchDrawer';
import { useReadLocalStorage } from 'usehooks-ts';

const HeaderMobileTop = () => {
  const { data } = useViewCartQuery(null);
  const isAuth = useGetLS('token');
  const favorites: any = useReadLocalStorage('favorites');

  return (
    <div className={styles.header__top}>
      <div className={styles.header__burger}>
        <MainDrawer />
      </div>
      <Link href='/' className={styles.header__logo}>
        <Image src='/static/media/logo_fin.png' alt='' width={60} height={60} />
      </Link>
      <div>
        <SearchDrawer />
        <Link href='/favorites'>
          <Image src='/static/media/heart.svg' alt='' width={16} height={16} />
          <span>{favorites?.length || 0}</span>
        </Link>
        <Link href='/cart'>
          <Image src='/static/media/bag.svg' alt='' width={16} height={16} />
          <span>{data?.products.length || 0}</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobileTop;
