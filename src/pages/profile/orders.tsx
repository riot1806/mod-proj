import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import { useGetOrdersQuery } from '@/redux/api/orderApi';
import { useGetLS } from '@/hooks/ls';
import ProfileLayout from '@/components/layout/ProfileLayout';
import Searchbar from '@/components/searchbar/Searchbar';
import OrderItem from '@/components/order-item/OrderItem';

const ProfileOrders = () => {
  const { data } = useGetOrdersQuery(null);
  const isAuth = useGetLS('token');

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile__orders}>
        {data?.length ? (
          <div className={styles.profile__content}>
            <h2 className={styles.profile__title}>МОИ ЗАКАЗЫ</h2>
            <Searchbar placeholder='Поиск' />
            <div className={styles.profile__wrapper}>
              {data?.map((order) => (
                <OrderItem
                  reference={order.reference}
                  address={order.address}
                  status={order.state}
                  product={order.cart.products[0]}
                  order={order}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.profile__nothing}>
            <Image
              src='/static/media/ticket.svg'
              alt=''
              width={60}
              height={60}
            />
            <p>У ВАС ПОКА НЕТ ЗАКАЗОВ</p>
            <p>
              <small>Здесь появится информация о ваших заказах</small>
            </p>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default ProfileOrders;
