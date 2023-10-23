import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { useLocalStorage } from 'usehooks-ts';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces/Product';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import Fav from '../fav/Fav';
import ImageLoader from '../template/ImageLoader';

interface Props {
  item: Product;
}

const ProductItem = ({ item }: Props) => {
  const imageSource = useGetImageSource(item.media!);
  const [recent, setRecent] = useLocalStorage<string[]>('recent', []);
  const { refetch } = useViewFavoritesQuery('recent');
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

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
        {!imageLoaded && <ImageLoader height={isMobile ? '200px' : '400px'} />}
        <Image
          src={imageSource}
          alt=''
          fill
          onLoadingComplete={() => setImageLoaded(true)}
        />
        <Fav itemId={item.item_id || item.id} />
      </div>
      <div className={styles.product__bottom}>
        <b>{item.brand.name}</b>
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
  );
};

export default ProductItem;
