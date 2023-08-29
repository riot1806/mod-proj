import styles from './styles.module.scss';

import Image from 'next/image';

import { useGetImageSource } from '@/hooks/useGetImageSource';
import { CartItem } from '@/interfaces/CartItem';
import { Address } from '@/interfaces/Address';

interface Props {
  reference: number;
  address: Address;
  product: CartItem;
}

const OrderItem = ({ reference, address, product }: Props) => {
  const imageSource = useGetImageSource(product.media!);

  return (
    <div className={styles.item}>
      <div className={styles.item__top}>
        <b>№{reference}</b>
        <p>
          {address.street}, дом {address.building}, кв {address.flat},{' '}
          {address.location.name}
        </p>
      </div>
      <div className={styles.item__bottom}>
        <Image src={imageSource} alt='' width={100} height={100} />
        <div className={styles.item__info}>
          <p>{product.brand.name}</p>
          <b>{product.name}</b>
          <p>Размер: {product.option.name}</p>
          <strong>{product.price} UZS</strong>
        </div>
        <ul className={styles.item__details}>
          <li>
            <span>КОЛИЧЕСТВО</span>
            <span>{product.quantity}</span>
          </li>
          <li>
            <span>СТОИМОСТЬ</span>
            <span>{product.price} сум</span>
          </li>
          <li>
            <span>ДОСТАВКА</span>
            <span>1333 сум</span>
          </li>
          <li>
            <span>К ОПЛАТЕ</span>
            <span>
              <strong>{product.price * product.quantity} сум</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderItem;
