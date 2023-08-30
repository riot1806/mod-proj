import styles from '../styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { CartItem } from '@/interfaces/CartItem';

interface Props {
  reference: number;
  status: string;
  product: CartItem;
  imageSource: string;
}

const OrderItemMobile = ({
  reference,
  status = 'Pending',
  product,
  imageSource,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__bottom}>
        <Image src={imageSource} alt='' width={100} height={100} />
        <div className={styles.item__info}>
          <div className={styles.item__col}>
            <b>№{reference}</b>
            <strong>{product.price} UZS</strong>
          </div>
          {status && <b>{status}</b>}
        </div>
        <ul className={styles.item__details}>
          <li>
            <span>КОЛ-ВО</span>
            <span>{product.quantity}</span>
          </li>
          <li>
            <Link href={`/products/${product.id}`}>Подробнее</Link>
            <Image src='/static/media/next.svg' alt='' width={16} height={16} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderItemMobile;
