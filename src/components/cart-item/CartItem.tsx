import styles from './styles.module.scss';

import Image from 'next/image';

import { useGetImageSource } from '@/hooks/useGetImageSource';
import { CartItem } from '@/interfaces/CartItem';
import {
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} from '@/redux/api/cartApi';
import Button from '../custom/button/Button';

interface Props {
  item: CartItem;
  cart?: boolean;
  checkout?: boolean;
  search?: boolean;
}

const CartItem = ({ item, cart, checkout, search }: Props) => {
  const imageSource = useGetImageSource(item.media!);
  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateQuantity] = useUpdateQuantityMutation();

  const handleRemoveItem = () => {
    removeFromCart({ id: item.id, optionId: item.option.id })
      .unwrap()
      .then(() => alert('Товар удален'));
  };

  const handleUpdateQuantity = (action: 'inc' | 'dec') => {
    if (action === 'dec' && item.quantity <= 1) return;

    const logic = action === 'inc' ? item.quantity + 1 : item.quantity - 1;

    updateQuantity({
      id: item.id,
      optionId: item.option.id,
      quantity: logic,
    }).unwrap();
  };

  return (
    <div className={styles.item}>
      <Image src={imageSource} alt='' width={105} height={100} />
      <div className={styles.item__info}>
        <b>{item.brand.name}</b>
        <p>{item.name}</p>
        {cart && (
          <>
            <p>Размер: {item.option?.name}</p>
            <p>Цвет: {item.color?.name}</p>
          </>
        )}
        {search ? (
          <strong>{item.price.toLocaleString()} so'm</strong>
        ) : (
          <strong>{(item.price * item.quantity).toLocaleString()} so'm</strong>
        )}
        {checkout && <p>Кол-во: {item.quantity}</p>}
      </div>
      {cart && (
        <div className={styles.item__actions}>
          <button onClick={handleRemoveItem}>
            <Image
              src='/static/media/trash.svg'
              alt=''
              width={20}
              height={20}
            />
          </button>
          <div className={styles.item__counter}>
            <Button dark onClick={() => handleUpdateQuantity('dec')}>
              -
            </Button>
            <span>{item.quantity}</span>
            <Button dark onClick={() => handleUpdateQuantity('inc')}>
              +
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
