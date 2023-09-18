import { useEffect } from 'react';
import styles from './styles.module.scss';

import { useLocalStorage } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces/Product';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import Fav from '../fav/Fav';

interface Props {
  item: Product;
}

const ProductItem = ({ item }: Props) => {
  const imageSource = useGetImageSource(item.media!);
  const [recent, setRecent] = useLocalStorage<string[]>('recent', []);
  const { refetch } = useViewFavoritesQuery('recent');

  const strId = item.item_id?.toString() || item.id?.toString();

  const isExists = recent?.find((id) => id === strId);

  const addToRecent = () => {
    if (isExists) {
      return;
    }

    setRecent([...recent, strId]);
  };

  useEffect(() => {
    refetch();
  }, [recent]);

  return (
    <Link
      href={`/products/${item.item_id || item.id}`}
      className={styles.product}
      onClick={addToRecent}
    >
      <div className={styles.product__top}>
        <Image src={imageSource} alt='' fill />
        <Fav itemId={item.item_id || item.id} />
      </div>
      <div className={styles.product__bottom}>
        <b>{item.brand.name}</b>
        <p>{item.name}</p>
        {item.price ? (
          <div className={styles.product__sale}>
            <span>{item.price} UZS</span>
            <s>{item.old_price} UZS</s>
          </div>
        ) : (
          <strong>{item.price} UZS</strong>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
