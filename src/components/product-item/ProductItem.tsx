import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces/Product';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import Fav from '../fav/Fav';

interface Props {
  item: Product;
}

const ProductItem = ({ item }: Props) => {
  const imageSource = useGetImageSource(item.media!);

  return (
    <Link
      href={`/products/${item.item_id || item.id}`}
      className={styles.product}
    >
      <div className={styles.product__top}>
        <Image src='https://brandsego.com/cdn/shop/files/Walk-Women-Sneakers-White-NA14665-Usman-1685023767.jpg?v=1685023769' alt='' fill />
        <Fav itemId={item.item_id!} />
      </div>
      <div className={styles.product__bottom}>
        <p>{item.brand.name}</p>
        <b>{item.name}</b>
        <strong>{item.price} UZS</strong>
      </div>
    </Link>
  );
};

export default ProductItem;
