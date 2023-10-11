import styles from '../styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ContentLoader from 'react-content-loader';

import {
  useGetHomeCategoriesQuery,
  useGetHomeQuery,
} from '@/redux/api/homeApi';
import SearchDrawer from '@/components/drawer/search/SearchDrawer';
import Dropdown from '@/components/dropdown/Dropdown';

const HeaderBottom = () => {
  const { data, isLoading } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  const { data: categoryData } = useGetHomeCategoriesQuery(activeCategory?.id!);

  return (
    <div className={styles.header__bottom}>
      {isLoading ? (
        <ContentLoader
          width='100%'
          height='10px'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='0' y='0' rx='0' ry='0' width='100%' height='100%' />
        </ContentLoader>
      ) : (
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
      )}
      <SearchDrawer />
    </div>
  );
};

export default HeaderBottom;
