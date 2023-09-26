import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import { Box, LinearProgress } from '@mui/material';
import Link from 'next/link';

import { useGetHomeQuery } from '@/redux/api/homeApi';

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
    <Box sx={{ width: '20%' }}>
      <LinearProgress color='inherit' />
    </Box>
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
