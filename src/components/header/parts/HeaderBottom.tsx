import styles from '../styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import Searchbar from '@/components/searchbar/Searchbar';

const HeaderBottom = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  return (
    <div className={styles.header__bottom}>
      <ul>
        {activeCategory?.categories?.map((c) => (
          <li key={c.id}>
            <Link href={{ pathname: '/products', query: { c: c.id } }}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      <Searchbar placeholder='Товар, бренд или цвет' />
    </div>
  );
};

export default HeaderBottom;
