import styles from '@/styles/Order.module.scss';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { useGetImageSource } from '@/hooks/useGetImageSource';
import SecLayout from '@/components/layout/SecLayout';
import { useGetOrderQuery } from '@/redux/api/orderApi';
import Button from '@/components/custom/button/Button';

const Order = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('o');
  const { data } = useGetOrderQuery(+search);

  const handleClick = () => {
    window.location.href = 'tel:+998339999990';
  };

  return (
    <SecLayout title='ОФОРМЛЕНИЕ ЗАКАЗА'>
      <div className={styles.order}>
        <div className={styles.order__top}>
          <p>Ваш заказ №{data?.reference} успешно оформлен</p>
          <b>СПАСИБО!</b>
        </div>
        <div className={styles.order__bottom}>
          <strong>
            ОТПРАВКА:{' '}
            {data?.delivery === 'express' ? 'ЭКСПРЕСС' : 'СДАНДАРТНАЯ КУРЬЕРОМ'}
          </strong>
          <p>
            г. {data?.address.location.name}, {data?.address.street}, д.
            {data?.address.building} кв.
            {data?.address.flat}
          </p>
          <span>
            {data?.payment === 'card'
              ? 'Оплата картой'
              : 'Оплата при получении'}
          </span>
          <hr />
          <ul className={styles.order__products}>
            {data?.cart.products.map((product) => {
              const imageSource = useGetImageSource(product.media);

              return (
                <li key={product.id}>
                  <div className={styles.order__top}>
                    <div className={styles.order__top_a}>
                      <Image
                        src={imageSource}
                        alt=''
                        width={105}
                        height={100}
                      />
                      <p>{product.name}</p>
                    </div>
                    <div className={styles.order__top_b}>
                      <b>{product.quantity}</b>
                      <strong>{product.price.toLocaleString()} сум</strong>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.order__bottom}>
                    <ul>
                      <li>
                        <span>1 товар</span>
                        <span>{product.price.toLocaleString()} сум</span>
                      </li>
                      <li>
                        <span>Цена доставки</span>
                        <span>10 000 сум</span>
                      </li>
                      <li>
                        <span>
                          <b>Всего</b>
                        </span>
                        <span>
                          <strong>
                            {(
                              product.price * product.quantity
                            ).toLocaleString()}{' '}
                            сум
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <hr />
                </li>
              );
            })}
          </ul>
          <p className={styles.order__warning}>
            Внимание! После обработки заявки вы получите смс уведомление либо с
            вами свяжется наш менеджер для подтверждения заказа{' '}
            <strong>№{data?.reference}</strong>
          </p>
          <Button dark onClick={handleClick}>
            ПОЗВОНИТЕ НАМ
          </Button>
        </div>
      </div>
    </SecLayout>
  );
};

export default Order;
