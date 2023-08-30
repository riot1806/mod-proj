import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import { useGetOrdersQuery } from '@/redux/api/orderApi';
import ProfileLayout from '@/components/layout/ProfileLayout';
import Searchbar from '@/components/searchbar/Searchbar';
import OrderItem from '@/components/order-item/OrderItem';

const ProfileOrders = () => {
  const { data } = useGetOrdersQuery(null);

  return (
    <ProfileLayout>
      <div className={styles.profile__orders}>
        {data?.length ? (
          <div className={styles.profile__content}>
            <h2 className={styles.profile__title}>МОИ ЗАКАЗЫ</h2>
            <Searchbar placeholder='Поиск' />
            <div className={styles.profile__wrapper}>
              {data?.map((order) =>
                order.cart.products.map((product) => (
                  <OrderItem
                    key={product.id}
                    reference={order.reference}
                    address={order.address}
                    status={order.state}
                    product={product}
                  />
                ))
              )}
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
