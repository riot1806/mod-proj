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
