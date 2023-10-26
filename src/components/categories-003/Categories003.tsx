import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useGetImageSource } from '@/hooks/useGetImageSource';
import { baseCarouselConfig } from '@/utils/carousel';
import { Category003 } from '@/interfaces/Category003';
import Carousel from '../carousel/Carousel';

type Categories003Props = {
  title: string;
  items: Category003[];
};

const Categories003 = ({ title, items }: Categories003Props) => {
  const router = useRouter();

  return (
    <section className={styles.categories}>
      {title && <h2>{title}</h2>}
      <Carousel {...baseCarouselConfig} className={styles.categories__carousel} autoWidth>
        {items.map((item) => {
          const imageSource = useGetImageSource(item.media);

          return (
            <div key={item.id} className={styles.categories__item}>
              <Link
                href={{
                  pathname: '/products',
                  query: { ...router.query, c: item.item_id },
                }}
              >
                <Image src={imageSource} alt='' fill />
                <h4>{item.name}</h4>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Categories003;
