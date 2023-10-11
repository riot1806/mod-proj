import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

import Link from 'next/link';

import { useViewCartQuery } from '@/redux/api/cartApi';
import SecLayout from '@/components/layout/SecLayout';
import CartItem from '@/components/cart-item/CartItem';

const CheckoutLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useViewCartQuery(null);

  return (
    <SecLayout title='ОФОРМЛЕНИЕ ЗАКАЗА'>
      <div className={styles.checkout__layout}>
        <div className={styles.checkout__left}>{children}</div>
        <div className={styles.checkout__right}>
          <div className={styles.checkout__items}>
            <div className={styles.checkout__head}>
              <span>КОЛ-ВО ТОВАРОВ - {data?.products.length}</span>
              <Link href='/cart'>ИЗМЕНИТЬ</Link>
            </div>
            <div className={styles.checkout__body}>
              {data?.products.map((product) => (
                <CartItem key={product.id} item={product} checkout />
              ))}
            </div>
          </div>
          <ul className={styles.checkout__total}>
            <li>
              <strong>Всего</strong>
              <strong>{data?.total_amount} сум</strong>
            </li>
          </ul>
        </div>
      </div>
    </SecLayout>
  );
};

export default CheckoutLayout;
