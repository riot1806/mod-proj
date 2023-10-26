import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { MinCategory } from '@/interfaces/MinCategory';

type MinCategoriesProps = {
  title: string;
  items: MinCategory[];
};

const MinCategories = ({ title, items }: MinCategoriesProps) => {
  const router = useRouter();

  return (
    <section className={styles.min__categories}>
      {title && <h2>{title}</h2>}
      <ul className={styles.min__categories_list}>
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: '/products',
                query: { ...router.query, c: item.item_id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MinCategories;
