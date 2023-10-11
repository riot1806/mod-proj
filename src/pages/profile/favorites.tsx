import styles from '@/styles/Profile.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import { useGetLS } from '@/hooks/ls';
import ProfileLayout from '@/components/layout/ProfileLayout';
import ProductItem from '@/components/product-item/ProductItem';
import Button from '@/components/custom/button/Button';

const ProfileFavorites = () => {
  const { data } = useViewFavoritesQuery('favorites');
  const isAuth = useGetLS('token');

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile__favorites}>
        <h2 className={styles.profile__title}>ИЗБРАННОЕ</h2>
        {data?.length ? (
          <div className={styles.profile__wrapper}>
            {data.map((product) => (
              <ProductItem key={product.id} item={product} />
            ))}
          </div>
        ) : (
          <div className={styles.profile__nothing}>
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
    </ProfileLayout>
  );
};

export default ProfileFavorites;
