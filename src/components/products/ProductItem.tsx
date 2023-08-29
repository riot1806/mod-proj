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
    <div className={styles.product}>
      <div className={styles.product__top}>
        <Image src={imageSource} alt='' fill />
        <Fav itemId={item.item_id!} />
      </div>
      <Link
        href={`/products/${item.item_id}`}
        className={styles.product__bottom}
      >
        <p>{item.brand.name}</p>
        <b>{item.name}</b>
        <strong>{item.price} UZS</strong>
      </Link>
    </div>
  );
};

export default ProductItem;
