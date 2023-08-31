import styles from '@/styles/Favorites.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import SecLayout from '@/components/layout/SecLayout';
import Button from '@/components/custom/button/Button';
import ProductItem from '@/components/product-item/ProductItem';

const data: any[] = [
  //   {
  //     id: 13,
  //     name: 'Running trainers Beige',
  //     slug: 'running-trainers-beige11',
  //     category: {
  //       id: 3,
  //       name: 'Футболки',
  //       slug: 'muzciny-futbolki',
  //       media: null,
  //     },
  //     brand: {
  //       id: 10,
  //       name: 'Pull & Bear',
  //     },
  //     media: null,
  //     price: 760,
  //     old_price: 0,
  //   },
  //   {
  //     id: 12,
  //     name: 'Running trainers Black',
  //     slug: 'running-trainers-black',
  //     category: {
  //       id: 3,
  //       name: 'Футболки',
  //       slug: 'muzciny-futbolki',
  //       media: null,
  //     },
  //     brand: {
  //       id: 10,
  //       name: 'Pull & Bear',
  //     },
  //     media: null,
  //     price: 760,
  //     old_price: 0,
  //   },
];

const Favorites = () => {
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
            <Link href='/products'>
              <Button>ПЕРЕЙТИ В КАТАЛОГ</Button>
            </Link>
          </div>
        )}
      </div>
    </SecLayout>
  );
};

export default Favorites;
