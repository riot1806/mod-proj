import styles from './styles.module.scss';

import { baseCarouselConfig } from '@/utils/carousel';
import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import Carousel from '../carousel/Carousel';
import RecentItem from '../recent-item/RecentItem';

const Recent = () => {
  const { data } = useViewFavoritesQuery('recent');

  if (!data?.length) return null;

  return (
    <section className={styles.products}>
      <h2>НЕДАВНО ПРОСМОТРЕННЫЕ ТОВАРЫ</h2>
      <Carousel
        {...baseCarouselConfig}
        loop={false}
        className={styles.products__carousel}
      >
        {data?.map((item) => (
          <RecentItem key={item.id} item={item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Recent;
