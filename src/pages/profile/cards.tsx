import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import { useGetUserCardsQuery } from '@/redux/api/userApi';
import { useGetLS } from '@/hooks/ls';
import ProfileLayout from '@/components/layout/ProfileLayout';
import AddCardModal from '@/components/modal/add-cart/AddCardModal';

const ProfileCards = () => {
  const { data } = useGetUserCardsQuery(null);
  const isAuth = useGetLS('token');

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile__cards}>
        {data?.length ? (
          <>
            <h2 className={styles.profile__title}>МОИ КАРТЫ</h2>
            <ul>
              {data.map((card) => (
                <li key={card.id}>
                  <b>{card.number}</b>
                  <button>
                    <Image
                      src='/static/media/trash.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <AddCardModal />
          </>
        ) : (
          <div className={styles.profile__nothing}>
            <Image src='/static/media/card.svg' alt='' width={60} height={60} />
            <p>У ВАС НЕТ КАРТ</p>
            <p>
              <small>Чтобы быстро оформлять заказы нужно добавить карту</small>
            </p>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default ProfileCards;
