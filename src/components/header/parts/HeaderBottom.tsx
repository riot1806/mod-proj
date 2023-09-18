import styles from '../styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import {
  useGetHomeCategoriesQuery,
  useGetHomeQuery,
} from '@/redux/api/homeApi';
import SearchDrawer from '@/components/drawer/search/SearchDrawer';
import Dropdown from '@/components/dropdown/Dropdown';

const HeaderBottom = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  const { data: categoryData } = useGetHomeCategoriesQuery(activeCategory?.id!);

  return (
    <div className={styles.header__bottom}>
      <ul>
        {categoryData?.map((c) => (
          <li key={c.id}>
            <Link href={{ pathname: '/products', query: { c: c.id } }}>
              {c.name}
            </Link>
            <Dropdown id={activeCategory?.id!} styles={styles} />
          </li>
        ))}
      </ul>
      <SearchDrawer />
    </div>
  );
};

export default HeaderBottom;
