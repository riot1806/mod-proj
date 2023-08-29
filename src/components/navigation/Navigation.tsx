import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useGetHomeQuery } from '@/redux/api/homeApi';

const Navigation = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('c');

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

  return (
    <nav className={styles.nav}>
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
  );
};

export default Navigation;
