import styles from '@/styles/Favorites.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import SecLayout from '@/components/layout/SecLayout';
import Button from '@/components/custom/button/Button';
import ProductItem from '@/components/product-item/ProductItem';

const Favorites = () => {
  const { data } = useViewFavoritesQuery(null);

  return (
    <SecLayout title='ИЗБРАННЫЕ'>
      <div className={styles.favorites}>
        {data?.length ? (
          <div className={styles.favorites__wrapper}>
            {data.map((product) => (
              <ProductItem key={product.id} item={product} />
            ))}
          </div>
        ) : (
          <div className={styles.favorites__nothing}>
            <Image
              src='/static/media/heart_big.svg'
              alt=''
              width={60}
              height={60}
            />
            <p>ЗДЕСЬ ПОКА ПУСТО</p>
            <p>
              <small>Вы пока ничего не добавили в избранное</small>
            </p>
            <Link href='/'>
              <Button>ПЕРЕЙТИ В КАТАЛОГ</Button>
            </Link>
          </div>
        )}
      </div>
    </SecLayout>
  );
};

export default Favorites;
