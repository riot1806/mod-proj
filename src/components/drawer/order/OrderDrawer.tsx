import { SetStateAction, Dispatch } from 'react';
import styles from './styles.module.scss';

import { Drawer } from '@mui/material';
import Image from 'next/image';

import { Order } from '@/interfaces/Order';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import DrawerHead from '../head/DrawerHead';

type OrderDrawerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  order: Order;
  statusColor: () => string;
  sum: number;
};

const OrderDrawer = ({
  open,
  setOpen,
  order,
  statusColor,
  sum,
}: OrderDrawerProps) => {
  return (
    <Drawer
      anchor='right'
      open={open}
      PaperProps={{ style: { width: '100%' } }}
    >
      <div className={styles.drawer}>
        <DrawerHead title={`№${order.reference}`} setState={setOpen} />
        <div className={styles.drawer__body}>
          <p>
            {order.address.street}, дом {order.address.building},{' '}
            {order.address.location.name}
          </p>
          <ul className={styles.drawer__products}>
            {order.cart.products.map((product) => {
              const imageSource = useGetImageSource(product.media);

              return (
                <li key={product.id}>
                  <div className={styles.drawer__top}>
                    <div
                      className={styles.drawer__indicator}
                      style={{ backgroundColor: statusColor() }}
                    ></div>
                    <Image src={imageSource} alt='' width={105} height={100} />
                    <div className={styles.drawer__info}>
                      <h4>{product.brand.name}</h4>
                      <h3>{product.name}</h3>
                      <p>
                        <span>РАЗМЕР: </span>
                        {product.option.name}
                      </p>
                      <h2>{product.price.toLocaleString()} UZS</h2>
                    </div>
                  </div>
                  <div className={styles.drawer__bottom}>
                    <ul>
                      <li>
                        <span>КОЛИЧЕСТВО</span>
                        <span>{product.quantity}</span>
                      </li>
                      <li>
                        <span>СТОИМОСТЬ</span>
                        <span>{product.price.toLocaleString()} сум</span>
                      </li>
                      <li>
                        <span>ДОСТАВКА</span>
                        <span>1 333 сум</span>
                      </li>
                      <li>
                        <span>К ОПЛАТЕ</span>
                        <span>
                          <strong>
                            {(product.price * product.quantity).toLocaleString()} сум
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderDrawer;
