import { useEffect } from 'react';
import styles from './styles.module.scss';

import { useLocalStorage } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces/Product';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import Fav from '../fav/Fav';
import { usePlaceholder } from '@/hooks/usePlaceholder';

interface Props {
  item: Product;
}

const ProductItem = ({ item }: Props) => {
  const imageSource = useGetImageSource(item.media!);
  const [recent, setRecent] = useLocalStorage<string[]>('recent', []);
  const { refetch } = useViewFavoritesQuery('recent');
  const placeholder = usePlaceholder(1000, 1000);

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
    item.price && (
      <Link
        href={`/products/${item.item_id || item.id}`}
        className={styles.product}
        onClick={addToRecent}
      >
        <div className={styles.product__top}>
          <Image
            src={imageSource}
            alt=''
            placeholder={placeholder}
            width={1000}
            height={1000}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Fav itemId={item.item_id || item.id} />
        </div>
        <div className={styles.product__bottom}>
          <b>{item.brand?.name}</b>
          <p>{item.name}</p>
          {item.old_price ? (
            <div className={styles.product__sale}>
              <span>{item.price.toLocaleString()} UZS</span>
              <s>{item.old_price.toLocaleString()} UZS</s>
            </div>
          ) : (
            <strong>{item.price.toLocaleString()} UZS</strong>
          )}
        </div>
      </Link>
    )
  );
};

export default ProductItem;
