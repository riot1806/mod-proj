import styles from '@/styles/Cart.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useViewCartQuery } from '@/redux/api/cartApi';
import SecLayout from '@/components/layout/SecLayout';
import Button from '@/components/custom/button/Button';
import CartItem from '@/components/cart-item/CartItem';

const Cart = () => {
  const { data } = useViewCartQuery(null);

  return (
    <SecLayout title='КОРЗИНА'>
      <div className={styles.cart}>
        {data?.products.length ? (
          <div className={styles.cart__wrapper}>
            <div className={styles.cart__left}>
              {data?.products.map((product) => (
                <CartItem key={product.id} item={product} />
              ))}
            </div>
            <div className={styles.cart__right}>
              <p>Всего {data?.total_amount} so'm</p>
              <p>Величая налоги за исключением доставки</p>
              <Link href='/checkout'>
                <Button dark>КУПИТЬ</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.cart__nothing}>
            <Image
              src='/static/media/shopping_bag.svg'
              alt=''
              width={60}
              height={60}
            />
            <p>Здесь пока пусто</p>
            <p>Вы пока ничего не добавили в корзину</p>
            <div className={styles.cart__buttons}>
              <Link href='/login'>
                <Button>ВОЙТИ</Button>
              </Link>
              <Link href='/'>
                <Button dark>ПРОДОЛЖИТЬ ПОКУПКИ</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </SecLayout>
  );
};

export default Cart;
