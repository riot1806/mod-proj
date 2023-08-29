import styles from '../styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { useGetHomeQuery } from '@/redux/api/homeApi';

const HeaderMiddle = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('c');

  const rest = (slug: string) => {
    if (search) {
      return {
        className: search === slug ? styles.header__active : '',
      };
    } else {
      return {
        className: slug === 'women' ? styles.header__active : '',
      };
    }
  };

  return (
    <div className={styles.header__middle}>
      <nav>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              <Link
                href={{ pathname: '/', query: { c: item.slug } }}
                {...rest(item.slug)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
        </li>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
