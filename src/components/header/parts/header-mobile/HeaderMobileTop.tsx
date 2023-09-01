import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import MainDrawer from '@/components/drawer/main/MainDrawer';

const HeaderMobileTop = () => {
  return (
    <div className={styles.header__top}>
      <div>
        <MainDrawer />
      </div>
      <Link href='/' className={styles.header__logo}>
        MOD
      </Link>
      <div>
        <button>
          <Image
            src='/static/media/search_dark.svg'
            alt=''
            width={16}
            height={16}
          />
        </button>
        <Link href='/favorites'>
          <Image src='/static/media/heart.svg' alt='' width={16} height={16} />
        </Link>
        <Link href='/cart'>
          <Image src='/static/media/bag.svg' alt='' width={16} height={16} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobileTop;
