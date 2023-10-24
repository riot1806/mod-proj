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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f3f3" offset="20%" />
      <stop stop-color="#ecebeb" offset="50%" />
      <stop stop-color="#f3f3f3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f3f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

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
        <Image
          src={imageSource}
          alt=''
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(1000, 1000)
          )}`}
          width={1000}
          height={1000}
          style={{ maxWidth: '100%', height: 'auto' }}
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
