import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import ContentLoader from 'react-content-loader';

const Navigation = () => {
  const { data, isLoading } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const rest = (slug: string) => {
    if (search) {
      return {
        className: search === slug ? styles.active : '',
      };
    } else {
      return {
        className: slug === 'men' ? styles.active : '',
      };
    }
  };

  return isLoading ? (
    <ContentLoader
      width='20%'
      height='10px'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='100%' />
    </ContentLoader>
  ) : (
    <nav className={styles.nav}>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={{ pathname: '/', query: { h: item.slug } }}
              {...rest(item.slug)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
