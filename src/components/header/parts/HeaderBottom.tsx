import styles from '../styles.module.scss';

import Link from 'next/link';

import Searchbar from '@/components/searchbar/Searchbar';

const HeaderBottom = () => {
  return (
    <div className={styles.header__bottom}>
      <ul>
        <li>
          <Link href='/'>Get the look</Link>
        </li>
        <li>
          <Link href='/'>Новинки</Link>
        </li>
        <li>
          <Link href='/'>Одежда</Link>
        </li>
        <li>
          <Link href='/'>Обувь</Link>
        </li>
      </ul>
      <Searchbar placeholder='Товар, бренд или цвет' />
    </div>
  );
};

export default HeaderBottom;
