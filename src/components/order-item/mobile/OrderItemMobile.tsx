import { useState } from 'react';
import styles from '../styles.module.scss';

import Image from 'next/image';

import { CartItem } from '@/interfaces/CartItem';
import { Order } from '@/interfaces/Order';
import OrderDrawer from '@/components/drawer/order/OrderDrawer';

interface Props {
  reference: number;
  status: {
    id: number;
    type: string;
    name: string;
  };
  product: CartItem;
  imageSource: string;
  statusColor: () => string;
  order: Order;
}

const OrderItemMobile = ({
  reference,
  status,
  product,
  imageSource,
  statusColor,
  order,
}: Props) => {
  const [open, setOpen] = useState(false);

  const sum = order.cart.products.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__bottom}>
          <div
            className={styles.item__status_bar}
            style={{ backgroundColor: statusColor() }}
          ></div>
          <Image src={imageSource} alt='' width={100} height={100} />
          <div className={styles.item__info}>
            <div className={styles.item__col}>
              <b>№{reference}</b>
              <strong>{order.total_amount.toLocaleString()} UZS</strong>
            </div>
            {status && <b className={styles.item__status}>{status.name}</b>}
          </div>
          <ul className={styles.item__details}>
            <li>
              <span>КОЛ-ВО:</span>
              <span>{sum}</span>
            </li>
            <li onClick={() => setOpen(true)}>
              Подробнее
              <Image
                src='/static/media/next.svg'
                alt=''
                width={16}
                height={16}
              />
            </li>
          </ul>
        </div>
      </div>
      <OrderDrawer
        open={open}
        setOpen={setOpen}
        order={order}
        statusColor={statusColor}
        sum={sum}
      />
    </>
  );
};

export default OrderItemMobile;
