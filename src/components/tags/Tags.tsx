import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { baseCarouselConfig } from '@/utils/carousel';
import { Tag } from '@/interfaces/Tag';
import Carousel from '../carousel/Carousel';

type TagsProps = {
  title: string;
  items: Tag[];
};

const Tags = ({ title, items }: TagsProps) => {
  const router = useRouter();

  return (
    <section className={styles.tags}>
      {title && <h2>{title}</h2>}
      <Carousel {...baseCarouselConfig} className={styles.tags__carousel} autoWidth={true}>
        {items.map((item) => (
          <div key={item.id}>
            <Link
              href={{
                pathname: '/products',
                query: { ...router.query, c: item.item_id },
              }}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Tags;
